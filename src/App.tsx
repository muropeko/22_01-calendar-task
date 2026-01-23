import { CalendarPage } from "./page/CalendarPage";
import { CalendarViewProvider } from "./providers";

export const App = () => {
  return (
    <CalendarViewProvider>
      <CalendarPage />
    </CalendarViewProvider>
  )};

export default App;
