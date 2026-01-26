import { type ReactNode, useState, useEffect } from "react";
import { EventContext } from "./event.context";
import { eventService } from "../services/eventService";
import type { IEvent } from "../types";
import { isWithinInterval, startOfMonth, endOfMonth, startOfWeek, endOfWeek, endOfDay, startOfDay, areIntervalsOverlapping } from "date-fns";

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

  const getByDay = (date: Date): IEvent[] =>
    events.filter(e =>
      isWithinInterval(date, { start: startOfDay(e.start), end: endOfDay(e.end) })
    )

  const getByWeek = (date: Date): IEvent[] => {
    const weekStart = startOfWeek(date, { weekStartsOn: 0 })
    const weekEnd = endOfWeek(date, { weekStartsOn: 0 })

    return events.filter(e =>
      areIntervalsOverlapping(
        { start: e.start, end: e.end },
        { start: weekStart, end: weekEnd }
      )
    )
  }

  const getByMonth = (date: Date): IEvent[] => {
    const monthStart = startOfMonth(date)
    const monthEnd = endOfMonth(date)

    return events.filter(e =>
      areIntervalsOverlapping(
        { start: e.start, end: e.end },
        { start: monthStart, end: monthEnd }
      )
    )
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
