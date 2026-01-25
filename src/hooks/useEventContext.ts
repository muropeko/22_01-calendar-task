import { useContext } from "react";
import { EventContext } from "../providers/event.context";

export const useEventContext = () => {
  const ctx = useContext(EventContext);
  if (!ctx) throw new Error("useEvents must be used inside EventProvider");
  return ctx;
};
