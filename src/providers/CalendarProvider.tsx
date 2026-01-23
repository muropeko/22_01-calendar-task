import { useState, type ReactNode } from "react";
import type { CalendarView } from "../types";
import { CalendarContext } from "./Calendar.context";

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
    const today = new Date();

    const [view, setView] = useState<CalendarView>("month");
    const [selectedDate, setSelectedDate] = useState(today);

    return (
        <CalendarContext.Provider value={{ 
            view, 
            setView,
            today,
            selectedDate, 
            setSelectedDate 
        }}>
            {children}
        </CalendarContext.Provider>
    );
};
