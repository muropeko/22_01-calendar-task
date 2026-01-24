import { useModal } from "../../hooks";
import { Button } from "../ui";
import { DeleteModalTemplate, EditModalTemplate } from "../ui/form-elements/templates";

export const EventItem = () => {
  const { isOpen: isEditOpen, open: openEdit, close: closeEdit } = useModal();
  const { isOpen: isDeleteOpen, open: openDelete, close: closeDelete } = useModal();

  return (
    <div className="flex justify-between items-center p-4 border border-white/10 hover:bg-white/5 transition-colors duration-200 cursor-pointer">
      <div>
        <h2 className="font-semibold text-2xl text-white">Подія</h2>
        <p className="text-gray-400 text-sm">11 April 14:24 – 12 April 15:24</p>
      </div>

      <div className="flex gap-2">
        <Button size="sm" rounded onClick={openEdit}>+</Button>
        <Button size="sm" rounded onClick={openDelete}>-</Button>
      </div>

        <EditModalTemplate isOpen={isEditOpen} onClose={closeEdit} />
        <DeleteModalTemplate isOpen={isDeleteOpen} onClose={closeDelete} />
    </div>
  );
};
