export const CalendarWeekdays = () => (
    <div className="grid grid-cols-7 bg-[#B489DE] text-white text-sm font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="py-2 text-center">
                {day}
            </div>
        ))}
    </div>
);
