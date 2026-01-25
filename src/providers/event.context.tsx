import { createContext } from "react";
import type { IEvent } from "../types";

export interface IEventContext {
  events: IEvent[];
  addEvent: (e: Omit<IEvent, "id">) => Promise<void>;
  updateEvent: (e: IEvent) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  getByDay: (date: Date) => IEvent[];
  getByWeek: (date: Date) => IEvent[];
  getByMonth: (date: Date) => IEvent[];
}

export const EventContext = createContext<IEventContext>({
  events: [],
  addEvent: async () => {},
  updateEvent: async () => {},
  deleteEvent: async () => {},
  getByDay: () => [],
  getByWeek: () => [],
  getByMonth: () => [],
});
