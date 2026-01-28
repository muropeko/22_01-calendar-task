import { CalendarCell } from "./CalendarCell";
import { CalendarWeekdays } from "./CalendarWeekdays";

interface Props {
  data: (Date | null)[];
}

export const CalendarMonthView = ({ data }: Props) => {
  const rows = 6
  const gridTemplateRows = `repeat(${rows}, 1fr)`

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <CalendarWeekdays />
      <div
        className="grid grid-cols-7 flex-1 min-h-0"
        style={{ gridTemplateRows }}
      >
        {data.map((cellDate) => (
          <CalendarCell
            key={cellDate?.toISOString()}
            date={cellDate}
          />
        ))}
      </div>
    </div>
  );
};
