import { CalendarHeader, CalendarMonthView, CalendarWeekView } from ".";
import { useCalendarContext, useCalendarMonth, useCurrentDate } from "../../hooks";

export const Calendar = () => {
    const { view, selectedDate, today, setSelectedDate } = useCalendarContext();
    const { prevMonth, nextMonth, cells } = useCalendarMonth();
    const { daysOfWeek } = useCurrentDate();

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
