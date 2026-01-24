export const HOURS = Array.from({ length: 24 }, (_, i) => i)

export const formatHour = (hour: number) => `${hour.toString().padStart(2, "0")}:00`
