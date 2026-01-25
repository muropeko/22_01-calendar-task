import {
  CalendarHeader,
  CalendarMonthView,
  CalendarWeekView,
} from ".";
import { useCalendarContext, useEventContext } from "../../hooks";
import { createCalendarCells } from "../../utils";
import { getDaysOfWeek } from "../../utils/time";

export const Calendar = () => {
    const { view, selectedDate, today, setSelectedDate } = useCalendarContext();
  const { getByMonth } = useEventContext();

  const cells = createCalendarCells(selectedDate)

  const monthEvents = getByMonth(selectedDate);

  const daysOfWeek = view === "week" ? getDaysOfWeek(selectedDate) : [];

    return (
        <div className="flex-1 bg-white rounded-lg flex flex-col overflow-hidden p-5 min-h-0">
            <CalendarHeader
                view={view}
                selectedDate={selectedDate}
                today={today}
                daysOfWeek={daysOfWeek}
                onPrev={prevMonth}
                onNext={nextMonth}
            />

            {view === "month" ? (
                <CalendarMonthView 
                    data={cells} 
                />
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
