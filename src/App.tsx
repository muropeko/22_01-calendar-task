import { CalendarPage } from "./page/CalendarPage";
import { CalendarProvider } from "./providers";

export const App = () => {
  return (
    <CalendarProvider>
      <CalendarPage />
    </CalendarProvider>
  )};

export default App;
