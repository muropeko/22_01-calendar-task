import { cn } from "../../utils";

interface CalendarCellProps {
  day?: number;
  isCurrentMonth?: boolean;
}

export const CalendarCell = ({ day, isCurrentMonth = true }: CalendarCellProps) => {
  const cellClasses = cn(
    "h-20 border-b border-r border-gray-300 p-1 flex flex-col",
    isCurrentMonth ? "bg-white text-gray-800" : "bg-gray-100 text-gray-400"
  );

  return (
    <div className={cellClasses}>
      <span className="text-xs self-end">{day}</span>
    </div>
  );
};
