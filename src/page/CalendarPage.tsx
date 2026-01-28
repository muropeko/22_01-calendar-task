import { Calendar, Sidebar } from "../components";

export const CalendarPage = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row gap-4 min-w-0 p-5">
      
      <div className="flex-1 flex flex-col min-w-0">
        <Calendar />
      </div>

      <div className="flex flex-col min-w-122.5">
        <Sidebar />
      </div>

    </div>
  );
};
