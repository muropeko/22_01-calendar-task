import { createContext } from "react";
import type { CalendarView } from "../types";

export interface CalendarContextValue {
    view: CalendarView;
    setView: (view: CalendarView) => void;

    today: Date;
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const CalendarContext = createContext<CalendarContextValue | null>(null);
