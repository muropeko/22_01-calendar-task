import { useCalendarContext } from "../../hooks";
import { TabButton } from "../ui";

export const SidebarTabs = () => {
    const { setView, view } = useCalendarContext();

    return (
        <div className="flex gap-3 justify-center">
            <TabButton active={view === 'month'} onClick={() => setView('month')}>
                MONTH
            </TabButton>
            <TabButton active={view === 'week'} onClick={() => setView('week')}>
                WEEK
            </TabButton>
        </div>
    );
};
