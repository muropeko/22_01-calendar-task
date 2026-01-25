import { isSameDay } from "date-fns";
import type { CalendarView } from "../../types";
import { useCalendarNavigation } from "../../hooks";
import { formatDate } from "../../utils/time";

interface Props {
  view: CalendarView;
  selectedDate: Date;
  today: Date;
  daysOfWeek: Date[]
}

export const CalendarHeader = ({
  view,
  selectedDate,
  today,
  daysOfWeek
}: Props) => {
  const { nextMonth, prevMonth } = useCalendarNavigation()

  const headerText =
    view === "month"
      ? formatDate(selectedDate, "MMMM yyyy")
      : `Week of ${formatDate(daysOfWeek[0])} - ${formatDate(
          daysOfWeek[daysOfWeek.length - 1]
        )}`;

  return (
    <div className="flex flex-col items-center gap-2 pb-5">
      {isSameDay(selectedDate, today) && (
        <button className="px-4 py-1 rounded bg-[#B489DE] text-white text-sm">
          Today
        </button>
      )}

      <div className="flex items-center justify-center w-80 max-w-150">
        <button
          onClick={prevMonth}
          className="text-[#B489DE] text-2xl px-4 cursor-pointer"
        >
          ‹
        </button>

        <h1 className="text-2xl font-semibold text-gray-700 text-center flex-1">
          {headerText}
        </h1>

        <button
          onClick={nextMonth}
          className="text-[#B489DE] text-2xl px-4 cursor-pointer"
        >
          ›
        </button>
      </div>
    </div>
  );
};
