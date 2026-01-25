export const getDefaultEventDates = (selectedDate: Date) => {
    const now = new Date()

    const start = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        now.getHours(),
        now.getMinutes()
    );

    const end = new Date(start.getTime() + 60 * 60 * 1000)

    return { start, end }
};