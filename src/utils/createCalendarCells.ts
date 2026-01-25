import { endOfMonth, startOfMonth } from "date-fns";


export const createCalendarCells = (date: Date): (Date | null)[] => {
    const start = startOfMonth(date)
    const end = endOfMonth(date)

    const cells: (Date | null)[] = []
    const startDay = start.getDay()

    for (let i = 0; i < startDay; i++) cells.push(null)

    for (let d = start.getDate(); d <= end.getDate(); d++) {
        cells.push(new Date(date.getFullYear(), date.getMonth(), d))
    }
    while (cells.length < 42) cells.push(null)

    return cells
};
