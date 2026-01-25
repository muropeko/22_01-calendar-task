import { format } from "date-fns";

export const formatDate = (date: Date, pattern: string = "MMM d, yyyy") => format(date, pattern);
