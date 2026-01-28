import { isSameDay } from "date-fns";
import type { CalendarView } from "../../types";
import { useCalendarNavigation } from "../../hooks";
import { formatDate } from "../../utils/time";

interface Props {
  view: CalendarView;
  selectedDate: Date;
  today: Date;
  daysOfWeek: Date[];
}

export const CalendarHeader = ({ view, selectedDate, today, daysOfWeek}: Props) => {
  const { nextMonth, prevMonth, nextWeek, prevWeek } = useCalendarNavigation()

  const onPrev = view === "month" ? prevMonth : prevWeek
  const onNext = view === "month" ? nextMonth : nextWeek

  return (
    <div className="flex flex-col items-center gap-2 pb-5">
      {isSameDay(selectedDate, today) && (
        <button className="px-4 py-1 rounded bg-[#B489DE] text-white text-sm">Today</button>
      )}

      <div className="flex items-center justify-center w-full gap-2 sm:gap-4 flex-wrap">
        <button
          onClick={onPrev}
          className="text-[#B489DE] text-xl sm:text-2xl px-2 sm:px-4 cursor-pointer"
        >
          ‹
        </button>

        <div className="flex-1 text-center break-words">
          {view === "month" ? (
            <div className="text-2xl font-semibold text-gray-700">
              {formatDate(selectedDate, "MMMM yyyy")}
            </div>
          ) : (
            <div className="text-2xl font-semibold text-gray-700">
              Week of {formatDate(daysOfWeek[0])} – {formatDate(daysOfWeek[daysOfWeek.length - 1])}
            </div>

          )}
        </div>

        <button
          onClick={onNext}
          className="text-[#B489DE] text-xl sm:text-2xl px-2 sm:px-4 cursor-pointer"
        >
          ›
        </button>
      </div>
    </div>
  );
};
