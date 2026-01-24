import { Modal, ModalContent, ModalHeader } from "../../modal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const EditModalTemplate = ({ isOpen, onClose }: Props) => {
    const handleSubmit = () => {
        alert("edit")
        onClose();
    };

  return (
    <Modal open={isOpen} onClose={onClose}>
        <ModalHeader title="Edit Event" description="Fill the form to edit an existing event" />
        <ModalContent>
            <form onSubmit={handleSubmit}>
                <p>edit event</p>
                <div className="mt-4 flex justify-center gap-2">
                    <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-[#B489DE] text-white font-medium hover:bg-[#B489DE]/80 transition-colors cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            </form>
        </ModalContent>
    </Modal>
  );
};
