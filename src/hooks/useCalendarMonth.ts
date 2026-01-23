import { useMemo, useState } from "react";
import { startOfMonth, endOfMonth, addDays } from "date-fns";

export const useCalendarMonth = (initialYear: number, initialMonth: number) => {
    const [year, setYear] = useState(initialYear)
    const [month, setMonth] = useState(initialMonth)

    const days = useMemo(() => {
        const start = startOfMonth(new Date(year, month, 1))
        const end = endOfMonth(start)

        const totalDays = end.getDate()

        return Array.from({ length: totalDays }, (_, i) => addDays(start, i))
    }, [year, month]);


    const prevMonth = () => {
        setMonth(prev => {
            if (prev === 0) {
                setYear(y => y - 1);
                return 11;
            }
            return prev - 1;
        });
    };

    const nextMonth = () => {
        setMonth(prev => {
            if (prev === 11) {
                setYear(y => y + 1);
                return 0;
            }
            return prev + 1;
        });
    };

    return { year, month, days, prevMonth, nextMonth };
};
