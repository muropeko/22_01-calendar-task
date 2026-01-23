import { startOfMonth, endOfMonth, addDays } from "date-fns";
import { useCalendarContext } from ".";
import { createCalendarCells } from "../utils";

export const useCalendarMonth = () => {
  const { selectedDate, setSelectedDate } = useCalendarContext()

  const start = startOfMonth(selectedDate)
  const end = endOfMonth(start)

  const monthDays = Array.from({ length: end.getDate() }, (_, i) => addDays(start, i))
  const cells = createCalendarCells(monthDays);

  const prevMonth = () => setSelectedDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, d.getDate()))
  const nextMonth = () => setSelectedDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()))

  return { cells, prevMonth, nextMonth };
};
