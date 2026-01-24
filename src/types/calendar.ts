export type CalendarView = "month" | "week"

export type EventType = "normal" | "holiday"

export interface Event {
    id: string
    title: string
    start: Date
    end: Date
    type: EventType
}
