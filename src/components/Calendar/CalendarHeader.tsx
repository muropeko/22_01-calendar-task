import { format, isSameDay } from "date-fns";
import type { CalendarView } from "../../types";

interface Props {
    view: CalendarView
    selectedDate: Date
    today: Date
    daysOfWeek: Date[]
    onPrev: () => void
    onNext: () => void
}

export const CalendarHeader = ({ view, selectedDate, today, daysOfWeek, onPrev, onNext }: Props) => {

    const monthHeader = format(selectedDate, "MMMM yyyy");
    const weekHeader = `Week of ${format(daysOfWeek[0], "MMM d, yyyy")} - ${format(daysOfWeek[daysOfWeek.length - 1], "MMM d, yyyy")}`;

    return (
        <div className="flex flex-col items-center gap-2 pb-5">

            {isSameDay(selectedDate, today) && (
                <button className="px-4 py-1 rounded bg-[#B489DE] text-white text-sm">
                    Today
                </button>
            )}

            <div className="flex items-center justify-center">
                <button className="text-[#B489DE] text-2xl px-4 cursor-pointer" onClick={onPrev}>‹</button>
                <h1 className="text-2xl font-semibold text-gray-700 min-w-50 max-w-125 w-full text-center">
                    {view === 'month' ? monthHeader : weekHeader}
                </h1>
                <button className="text-[#B489DE] text-2xl px-4 cursor-pointer" onClick={onNext}>›</button>
            </div>
        </div>
    );
};
