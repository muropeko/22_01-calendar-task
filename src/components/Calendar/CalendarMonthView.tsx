import { CalendarCell, CalendarWeekdays } from ".";

interface Props {
  data: (Date | null)[];
}

export const CalendarMonthView = ({ data }: Props) => {
  return (
    <>
      <CalendarWeekdays />
      <div className="grid grid-cols-7 border-t border-l border-gray-300">
        {data.map((date, i) => (
          <CalendarCell
            key={date?.toISOString() ?? `empty-${i}`}
            date={date}
          />
        ))}
      </div>
    </>
  );
};
