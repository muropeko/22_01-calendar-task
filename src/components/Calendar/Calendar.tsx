import { CalendarHeader, CalendarMonthView, CalendarWeekView } from ".";
import { useCalendarContext, useEventContext } from "../../hooks";
import { createCalendarCells } from "../../utils";
import { getDaysOfWeek } from "../../utils/time";

export const Calendar = () => {
  const { view, selectedDate, today, setSelectedDate } = useCalendarContext();
  const { getByMonth, getByWeek } = useEventContext();

  const cells = createCalendarCells(selectedDate);
  const monthEvents = getByMonth(selectedDate);
  const weekEvents = getByWeek(selectedDate);

  const daysOfWeek = view === "week" ? getDaysOfWeek(selectedDate) : [];

  return (
    <div className="flex-1 bg-white rounded-lg flex flex-col overflow-hidden p-5 min-h-0">
      <CalendarHeader
        view={view}
        selectedDate={selectedDate}
        today={today}
        daysOfWeek={daysOfWeek}
      />

      {view === "month" ? (
        <CalendarMonthView data={cells} events={monthEvents} />
      ) : (
        <CalendarWeekView
          data={daysOfWeek}
          events={weekEvents}
          selectedDate={selectedDate}
          today={today}
          setSelectedDate={setSelectedDate}
        />
      )}
    </div>
  );
};
