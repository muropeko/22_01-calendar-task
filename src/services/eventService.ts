import type { IEvent } from "../types";

const STORAGE_KEY = "events"

const parseEvents = (): IEvent[] => {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return []

  try {
    const parsed = JSON.parse(data).map((e: IEvent) => ({
      ...e,
      start: new Date(e.start),
      end: new Date(e.end),
    }))

    return parsed
  } catch (e) {
    console.error('smth went wrong during parcing: ', e)
    return []
  }
};

const saveEvents = (events: IEvent[]) => localStorage.setItem(STORAGE_KEY, JSON.stringify(events))

export const eventService = {
  getAll: () => parseEvents(),

  create: (event: IEvent) => {
    const events = parseEvents()
    events.push(event)
    saveEvents(events)
  },

  update: (event: IEvent) => {
    const events = parseEvents().map(e => e.id === event.id ? event : e)
    saveEvents(events)
  },

  delete: (id: string) => {
    const events = parseEvents().filter(e => e.id !== id)
    saveEvents(events)
  },

  getByDay: (date: Date) => {
    return parseEvents().filter(e =>
      e.start.getFullYear() === date.getFullYear() &&
      e.start.getMonth() === date.getMonth() &&
      e.start.getDate() === date.getDate()
    )
  },

  getByWeek: (start: Date, end: Date) => parseEvents().filter(e => e.start >= start && e.start <= end),

  getByMonth: (date: Date) => {
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1)
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59)
    return parseEvents().filter(e => e.start >= monthStart && e.start <= monthEnd)
  }
};
