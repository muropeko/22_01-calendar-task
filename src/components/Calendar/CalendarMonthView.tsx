import { CalendarCell } from "./CalendarCell";
import { CalendarWeekdays } from "./CalendarWeekdays";

interface Props {
  data: (Date | null)[];
}

export const CalendarMonthView = ({ data }: Props) => {
  return (
    <>
      <CalendarWeekdays />
      <div className="grid grid-cols-7 gap-0">
        {data.map((cellDate) => (
          <CalendarCell
            key={cellDate?.toISOString()}
            date={cellDate}
          />
        ))}
      </div>
    </>
  );
};
