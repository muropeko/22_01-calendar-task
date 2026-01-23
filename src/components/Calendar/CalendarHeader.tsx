import { formatDate } from "date-fns";
import type { CalendarView } from "../../types";

interface Props {
    view: CalendarView
    year: number
    month: number
    onPrev: () => void
    onNext: () => void
}

export const CalendarHeader = ({ view, year, month, onPrev, onNext }: Props) => {
    const monthName = formatDate(new Date(year, month, 1), 'MMMM yyyy')

    return (
        <div className="flex flex-col items-center gap-2 pb-5">
            <button className="px-4 py-1 rounded bg-[#B489DE] text-white text-sm">
                Today
            </button>

            <div className="flex items-center justify-center">
                <button className="text-[#B489DE] text-2xl px-4 cursor-pointer" onClick={onPrev}>‹</button>
                <h1 className="text-2xl font-semibold text-gray-700 w-50 text-center">
                    {view === 'month' ? monthName : `test`}
                </h1>
                <button className="text-[#B489DE] text-2xl px-4 cursor-pointer" onClick={onNext}>›</button>
            </div>
        </div>
    );
};
