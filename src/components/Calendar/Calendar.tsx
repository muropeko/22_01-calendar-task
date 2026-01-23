import { CalendarHeader, CalendarMonthView } from ".";

export const Calendar = () => {
    return (
        <div className="flex-1 bg-white rounded-lg flex flex-col overflow-hidden p-5 min-h-0">
            <CalendarHeader />
            <CalendarMonthView />
        </div>
    );
};
