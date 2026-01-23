import { isSameDay } from "date-fns";
import { cn } from "../../utils";
import { useCalendarContext } from "../../hooks";

interface Props {
  date: Date | null;
}

export const CalendarCell = ({ date }: Props) => {
  const { selectedDate, setSelectedDate, today } = useCalendarContext();

  const isCurrentMonth = !!date;
  const isToday = !!date && isSameDay(date, today);
  const isSelected = !!date && isSameDay(date, selectedDate);

  const handleClick = () => {
    if (date) setSelectedDate(date);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-20 border-b border-r border-gray-300 p-1 flex flex-col cursor-pointer",
        isCurrentMonth ? "bg-white text-gray-800" : "bg-gray-100 text-gray-400",
        isToday && "border-2 border-purple-500",
        isSelected && "bg-purple-100"
      )}
    >
      <span className="text-xs self-end">{date?.getDate()}</span>
    </div>
  );
};
