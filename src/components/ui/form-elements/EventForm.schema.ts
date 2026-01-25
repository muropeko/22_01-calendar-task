import { z } from "zod";
import { EVENT_TYPES } from "../../../types";

export const eventSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    startDate: z.string(),
    endDate: z.string(),
    type: z.enum(EVENT_TYPES),
  })
  .refine(
    (data) => new Date(data.endDate) > new Date(data.startDate),
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  )

export type EventFormValues = z.infer<typeof eventSchema>