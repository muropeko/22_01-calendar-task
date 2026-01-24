import { format, isSameDay } from "date-fns";
import React from "react";
import { formatHour, HOURS } from "../../utils";

interface CalendarWeekViewProps {
  data: Date[]
  today: Date
  selectedDate: Date
  setSelectedDate: (date: Date) => void
}

export const CalendarWeekView = ({ data, today, selectedDate, setSelectedDate }: CalendarWeekViewProps) => {
  return (
    <div className="grid grid-cols-8 border-t border-l border-gray-300 overflow-y-auto">
      
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
            const isToday = isSameDay(day, today);
            const isSelected = isSameDay(day, selectedDate);

            return (
              <button
                key={day.toISOString() + hour}
                onClick={() => setSelectedDate(day)}
                className={`border-b border-r border-gray-300 h-12 w-full
                  ${isToday ? "border border-purple-500" : ""} 
                  ${isSelected ? "bg-purple-200 text-white cursor-default" : ""} 
                  hover:bg-purple-100 cursor-pointer`}
              ></button>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};
