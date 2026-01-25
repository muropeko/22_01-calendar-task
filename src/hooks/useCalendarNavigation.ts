import { useCalendarContext } from "../hooks";

export const useCalendarNavigation = () => {
    const { selectedDate, setSelectedDate } = useCalendarContext()

    const prevMonth = () => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
    const nextMonth = () => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))

    return { prevMonth, nextMonth }
};
