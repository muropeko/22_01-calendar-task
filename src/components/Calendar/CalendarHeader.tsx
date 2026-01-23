export const CalendarHeader = () => (
    <div className="flex flex-col items-center gap-2 pb-5">
        <button className="px-4 py-1 rounded bg-[#B489DE] text-white text-sm">
            Today
        </button>

        <div className="flex items-center gap-5">
            <button className="text-[#B489DE] text-2xl">‹</button>
            <h1 className="text-2xl font-semibold text-gray-700">April 2023</h1>
            <button className="text-[#B489DE] text-2xl">›</button>
        </div>
    </div>
);
