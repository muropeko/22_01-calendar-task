import { useContext } from "react";
import { CalendarContext } from "../providers/calendar.context";

export const useCalendarContext = () => {
    const context = useContext(CalendarContext);

    if (!context) {
        throw new Error("This hook needs a provider!");
    }

    return context;
};
