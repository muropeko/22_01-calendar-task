import { isSameDay, isWithinInterval } from "date-fns";
import { cn, formatHour, HOURS } from "../../utils";
import type { IEvent } from "../../types";
import type { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";
import React from "react";

export interface WeekViewProps {
  data: Date[]
  events: IEvent[]
  selectedDate: Date
  today: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
}

export const CalendarWeekView = ({
  data,
  events,
  selectedDate,
  today,
  setSelectedDate,
}: WeekViewProps) => {
  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-8 border-t border-l border-gray-300">
        <div className="border-b border-r border-gray-300 h-10"></div>
        {data.map((day) => (
          <div
            key={day.toISOString()}
            className="h-10 flex items-center justify-center bg-[#B489DE] text-white text-sm font-medium"
          >
            {format(day, "EEE dd")}
          </div>
        ))}

        {HOURS.map((hour) => (
          <React.Fragment key={hour}>
            <div className="border-b border-r border-gray-300 h-12 px-2 text-xs text-gray-500 flex justify-center items-center">
              {formatHour(hour)}
            </div>

            {data.map((day) => {
              const cellEvents = events.filter((e) =>
                isWithinInterval(new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour), {
                  start: e.start,
                  end: e.end,
                })
              );

              const isToday = isSameDay(day, today);
              const isSelected = isSameDay(day, selectedDate);

              return (
                <div
                  key={day.toISOString() + hour}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "border-b border-r border-gray-300 h-12 p-1 cursor-pointer relative",
                    isToday && "border-2 border-purple-500",
                    isSelected && "bg-purple-100"
                  )}
                >
                  {cellEvents.map((e) => (
                    <span
                      key={e.id}
                      className="absolute top-1 left-1 text-[10px] bg-purple-200 text-purple-800 rounded px-1 py-[1px] truncate"
                      title={e.title}
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
