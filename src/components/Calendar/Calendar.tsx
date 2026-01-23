import { CalendarHeader, CalendarMonthView, CalendarWeekView } from ".";
import { useCalendarView } from "../../hooks";

export const Calendar = () => {
    const { view } = useCalendarView();

    return (
        <div className="flex-1 bg-white rounded-lg flex flex-col overflow-hidden p-5 min-h-0">
            <CalendarHeader />
            { view === 'month' ? <CalendarMonthView /> : <CalendarWeekView /> }
        </div>
    );
};
