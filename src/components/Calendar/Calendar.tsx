import { CalendarHeader, CalendarMonthView, CalendarWeekView } from ".";
import { useCalendarView, useCalendarMonth } from "../../hooks";
import { createCalendarCells } from "../../utils";

export const Calendar = () => {
    const { view } = useCalendarView();
    const { year, month, days, prevMonth, nextMonth } = useCalendarMonth(2026, 0);

    const cell = createCalendarCells(days)

    return (
        <div className="flex-1 bg-white rounded-lg flex flex-col overflow-hidden p-5 min-h-0">
            <CalendarHeader
                view={view}
                year={year}
                month={month}
                onPrev={prevMonth}
                onNext={nextMonth}
            />

            {view === 'month' ? (
                <CalendarMonthView data={cell} />
            ) : (
                <CalendarWeekView />
            )}
        </div>
    );
};
