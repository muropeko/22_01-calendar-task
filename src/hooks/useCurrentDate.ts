import { startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import { useCalendarContext } from ".";

export const useCurrentDate = () => {
    const { selectedDate, today } = useCalendarContext();

    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });
    const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 0 });
    const daysOfWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

    return { today, selectedDate, daysOfWeek };
};
