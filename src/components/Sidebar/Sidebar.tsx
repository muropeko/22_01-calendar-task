import { SidebarEventList, SidebarHeader, SidebarTabs } from ".";
import { Button } from "../ui";
import { useModal } from "../../hooks/useModal";
import { AddModalTemplate } from "../ui/form-elements/templates/AddModalTemplate";

export const Sidebar = () => {
  const { isOpen, open, close } = useModal();

  return (
    <div className="w-120 flex flex-col max-h-screen gap-4">
      <SidebarTabs />

      <div className="flex flex-col flex-1 min-h-0">
        <SidebarHeader />

        <div className="flex-1 min-h-0 overflow-y-auto">
          <SidebarEventList />
        </div>

        <div className="flex justify-end mt-auto">
          <Button onClick={open} rounded >+</Button>
        </div>
      </div>
      <AddModalTemplate isOpen={isOpen} onClose={close} />
    </div>
  );
};
