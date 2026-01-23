import { getDay } from "date-fns";

export const createCalendarCells = (data: Date[]) => {
    const firstDayOfMonth = data[0];
    const startWeekDay = getDay(firstDayOfMonth);
    
    const emptyStart = Array(startWeekDay).fill(null);

    const allCells = [...emptyStart, ...data];

    while (allCells.length < 42) {
        allCells.push(null);
    }

    return allCells;
};
