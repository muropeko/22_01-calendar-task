import { SidebarEventList, SidebarHeader, SidebarTabs } from ".";
import { Button } from "../ui";

export const Sidebar = () => {
    return (
        <div className="w-120 flex flex-col max-h-screen gap-4">
            <SidebarTabs />
            <div className="flex flex-col flex-1 min-h-0">
                <SidebarHeader />
                <SidebarEventList />
                <div className="flex justify-end pt-10">
                    <Button size="sm" rounded>-</Button>
                </div>
            </div>
        </div>
    );
};
