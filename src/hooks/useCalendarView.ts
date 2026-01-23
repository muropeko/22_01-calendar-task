import { useContext } from "react";
import { CalendarViewContext } from "../providers/calendarView.context";

export const useCalendarView = () => {
    const context = useContext(CalendarViewContext);

    if (!context) {
        throw new Error("This hook needs a provider!");
    }

    return context;
};
