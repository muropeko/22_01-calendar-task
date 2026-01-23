export type CalendarView = "month" | "week"

export type EventType = "normal" | "holiday"
export type EventRepeat = "daily" | "weekly" | "monthly"

export interface Event {
    id: string
    title: string
    start: Date
    end: Date
    type: EventType
    repeat?: EventRepeat
}
