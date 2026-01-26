import { isSameDay } from "date-fns";
import { cn } from "../../utils";
import { useCalendarContext, useEventContext } from "../../hooks";

interface Props {
  date: Date | null;
}

export const CalendarCell = ({ date }: Props) => {
  const { selectedDate, setSelectedDate, today } = useCalendarContext();
  const { getByDay } = useEventContext();

  const isCurrentMonth = !!date;
  const isToday = !!date && isSameDay(date, today);
  const isSelected = !!date && isSameDay(date, selectedDate);

  const cellEvents = date ? getByDay(date) : []

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

      {cellEvents.length > 0 && (
        <div className="flex flex-col gap-1 mt-1">
          {cellEvents.map((e) => (
            <span
              key={e.id}
              className="text-[10px] bg-purple-200 text-purple-800 rounded px-1 py-[px] truncate"
              title={e.title}
            >
              {e.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
