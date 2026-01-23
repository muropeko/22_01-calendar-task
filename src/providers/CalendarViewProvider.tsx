import { useState, type ReactNode } from "react";
import { CalendarViewContext } from "./calendarView.context";
import type { CalendarView } from "../types";

export const CalendarViewProvider = ({ children }: { children: ReactNode }) => {
    const [view, setView] = useState<CalendarView>("month");

    return (
        <CalendarViewContext.Provider value={{ view, setView }}>
            {children}
        </CalendarViewContext.Provider>
    );
};
