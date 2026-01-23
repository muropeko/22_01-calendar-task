import { createContext } from "react";
import type { CalendarView } from "../types";

export interface CalendarViewContextValue {
    view: CalendarView;
    setView: (view: CalendarView) => void;
}

export const CalendarViewContext = createContext<CalendarViewContextValue | null>(null);
