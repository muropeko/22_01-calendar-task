interface CalendarCellProps {
    day: number;
}

export const CalendarCell = ({ day }: CalendarCellProps) => (
    <div className="h-20 border-b border-r border-gray-300 p-1 flex flex-col">
        <span className="text-xs text-gray-600 self-end">{day}</span>
    </div>
);
