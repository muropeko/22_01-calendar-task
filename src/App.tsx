import { CalendarPage } from "./page/CalendarPage";
import { CalendarProvider } from "./providers";
import { EventProvider } from "./providers/EventProvider";

export const App = () => {
  return (
    <CalendarProvider>
      <EventProvider>
        <CalendarPage />
      </EventProvider>
    </CalendarProvider>
  )};

export default App;
