import { type ReactNode, useState, useEffect } from "react";
import { EventContext } from "./event.context";
import { eventService } from "../services/eventService";
import type { IEvent } from "../types";
import { isSameDay, isWithinInterval, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<IEvent[]>([])

  const fetchEvents = async () => {
    const all = await eventService.getAll()
    setEvents(all)
  }

  useEffect(() => {
    (async () => {
      const all = await eventService.getAll();
      setEvents(all);
    })();

    const onStorageChange = (e: StorageEvent) => {
      if (e.key === "events") fetchEvents()
    };

    window.addEventListener("storage", onStorageChange)

    return () => {
      window.removeEventListener("storage", onStorageChange)
    }
  }, []);

  const addEvent = async (e: Omit<IEvent, "id">) => {
    const newEvent: IEvent = {
      id: crypto.randomUUID(),
      ...e,
    }

    await eventService.create(newEvent)
    await fetchEvents()
  }

  const updateEvent = async (e: IEvent) => {
    await eventService.update(e)
    await fetchEvents()
  }

  const deleteEvent = async (id: string) => {
    await eventService.delete(id)
    await fetchEvents()
  }

  const getByDay = (date: Date): IEvent[] => events.filter(e => isSameDay(e.start, date))

  const getByWeek = (date: Date): IEvent[] => {
    const start = startOfWeek(date, { weekStartsOn: 0 });
    const end = endOfWeek(date, { weekStartsOn: 0 });

    return events.filter(e => isWithinInterval(e.start, { start, end }))
  };

  const getByMonth = (date: Date): IEvent[] => {
    const monthStart = startOfMonth(date)
    const monthEnd = endOfMonth(date)

    return events.filter(e => isWithinInterval(e.start, { start: monthStart, end: monthEnd }))
  }

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        getByDay,
        getByWeek,
        getByMonth,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
