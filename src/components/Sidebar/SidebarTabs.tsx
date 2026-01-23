import { TabButton } from "../ui";

export const SidebarTabs = () => {
    return (
        <div className="flex gap-3 justify-center">
            <TabButton active={true} onClick={() => console.log('month')}>
                MONTH
            </TabButton>
            <TabButton active={false} onClick={() => console.log('week')}>
                WEEK
            </TabButton>
        </div>
    );
};
