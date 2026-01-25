import { startOfWeek } from "date-fns";

export const getDaysOfWeek = (date: Date): Date[] => {
    const start = startOfWeek(date, { weekStartsOn: 0 })

    return Array.from({ length: 7 }).map((_, i) => {
        const d = new Date(start)
        d.setDate(start.getDate() + i)
        return d
    })
};