import { isSameDay, isWithinInterval } from "date-fns";
import { cn, formatHour, HOURS } from "../../utils";
import type { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";
import React from "react";
import { useEventContext } from "../../hooks";

export interface WeekViewProps {
  data: Date[]
  selectedDate: Date
  today: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
}

export const CalendarWeekView = ({ data, selectedDate, today, setSelectedDate }: WeekViewProps) => {
  const { getByWeek } = useEventContext()
  const weekEvents = getByWeek(selectedDate)

  return (
    <div className="overflow-auto min-h-0">
      <div className="grid grid-cols-8 border-t border-l border-gray-300">
        <div className="border-b border-r border-gray-300 h-10" />

        {data.map((day) => (
          <div
            key={day.toISOString()}
            className="flex flex-col md:flex-row items-center justify-center bg-[#B489DE] text-white text-xs md:text-sm font-medium px-1 h-10 min-w-[40px] md:min-w-[60px]"
          >
            <span className="leading-none pr-1">{format(day, "EEE")}, </span>
            <span className="leading-none">{format(day, "dd")}</span>
          </div>
        ))}

        {HOURS.map((hour) => (
          <React.Fragment key={hour}>
            <div className="border-b border-r border-gray-300 h-8 md:h-10 px-2 text-xs text-gray-500 flex justify-center items-center min-w-[20px] md:min-w-[60px]">
              {formatHour(hour)}
            </div>

            {data.map((day) => {
              const cellTime = new Date(
                day.getFullYear(),
                day.getMonth(),
                day.getDate(),
                hour
              );

              const cellEvents = weekEvents.filter((e) =>
                isWithinInterval(cellTime, { start: e.start, end: e.end })
              );

              const isToday = isSameDay(day, today);
              const isSelected = isSameDay(day, selectedDate);

              return (
                <div
                  key={day.toISOString() + hour}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "border-b border-r border-gray-300 h-8 md:h-10 p-1 cursor-pointer relative min-w-10 md:min-w-15",
                    isToday && "border-2 border-purple-500",
                    isSelected && "bg-purple-100"
                  )}
                >
                  {cellEvents.map((e) => (
                    <span
                      key={e.id}
                      className="absolute top-1 left-1 text-[10px] bg-purple-200 text-purple-800 rounded px-1 py-px wrap-break-word"
                    >
                      {e.title}
                    </span>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
