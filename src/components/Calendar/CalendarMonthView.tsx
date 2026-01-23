import { CalendarCell, CalendarWeekdays } from ".";

export const CalendarMonthView = () => (
    <>
        <CalendarWeekdays />
        <div className="grid grid-cols-7 border-t border-l border-gray-300">
            {Array.from({ length: 42 }).map((_, i) => (
                <CalendarCell key={i} day={i + 1} />
            ))}
        </div>
    </>
);
