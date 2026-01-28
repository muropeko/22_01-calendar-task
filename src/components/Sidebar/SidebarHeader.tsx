import { format } from "date-fns";
import { useCalendarContext } from "../../hooks";

export const SidebarHeader = () => {
  const { selectedDate } = useCalendarContext();

  return (
    <div className="flex justify-between items-center px-5 py-6 gap-2">
      <h1 className="text-4xl text-white">{format(selectedDate, "EEEE")}</h1>
      <span className="text-gray-400">{format(selectedDate, "d MMMM yyyy")}</span>
    </div>
  );
};
