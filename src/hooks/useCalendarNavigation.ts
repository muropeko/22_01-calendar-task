import { addWeeks, subWeeks } from "date-fns";
import { useCalendarContext } from "../hooks";

export const useCalendarNavigation = () => {
  const { selectedDate, setSelectedDate } = useCalendarContext();

  const prevMonth = () => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
  const nextMonth = () =>setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))

  const prevWeek = () => setSelectedDate(subWeeks(selectedDate, 1))
  const nextWeek = () => setSelectedDate(addWeeks(selectedDate, 1))

  return { prevMonth, nextMonth, prevWeek, nextWeek }
};
