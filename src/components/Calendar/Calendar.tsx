import { CalendarHeader, CalendarMonthView, CalendarWeekView } from ".";
import { useCalendarContext } from "../../hooks";
import { createCalendarCells } from "../../utils";
import { getDaysOfWeek } from "../../utils/time";

export const Calendar = () => {
  const { view, selectedDate, today, setSelectedDate } = useCalendarContext();

  const cells = createCalendarCells(selectedDate);
  const daysOfWeek = view === "week" ? getDaysOfWeek(selectedDate) : []

  return (
    <div className="flex-1 flex flex-col bg-white rounded-lg p-6 md:min-h-0">
      <CalendarHeader
        view={view}
        selectedDate={selectedDate}
        today={today}
        daysOfWeek={daysOfWeek}
      />

      {view === "month" ? (
        <CalendarMonthView data={cells} />
      ) : (
        <CalendarWeekView
          data={daysOfWeek}
          selectedDate={selectedDate}
          today={today}
          setSelectedDate={setSelectedDate}
        />
      )}
    </div>
  );
};
