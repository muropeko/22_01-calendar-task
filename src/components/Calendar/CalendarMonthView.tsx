import { CalendarCell, CalendarWeekdays } from ".";

interface Props {
    data: Date[];
}

export const CalendarMonthView = ({ data }: Props) => {
    return (
        <>
            <CalendarWeekdays />
            <div className="grid grid-cols-7 border-t border-l border-gray-300">
                {data.map((day, i) => (
                    <CalendarCell
                        key={i}
                        day={day && day.getDate()}
                        isCurrentMonth={!!day}
                    />
                ))}

            </div>
        </>
    );
};
