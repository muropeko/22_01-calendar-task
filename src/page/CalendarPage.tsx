import { Calendar, Sidebar } from "../components";

export const CalendarPage = () => {
  return (
    <div className="h-screen overflow-hidden flex gap-10 p-10">
      <Calendar />
      <Sidebar />
    </div>
  );
};
