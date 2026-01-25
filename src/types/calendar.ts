export type CalendarView = "month" | "week"

export const EVENT_TYPES = ["normal", "holiday"] as const
export type EventType = (typeof EVENT_TYPES)[number]

export interface IEvent {
    id?: string
    title: string
    start: Date
    end: Date
    type: EventType
}
