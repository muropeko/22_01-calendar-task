import { Modal, ModalFooter, ModalHeader } from "../../modal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const DeleteModalTemplate = ({ isOpen, onClose }: Props) => {
    const handleSubmit = () => {
        alert("delete");
        onClose();
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalHeader title="Delete Event" description="Are you sure you want to delete this event?"/>

            <ModalFooter>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-5 py-2 rounded-lg bg-[#B489DE] text-white font-medium hover:bg-[#B489DE]/80 transition-colors cursor-pointer"
                >
                    Delete
                    </button>
            </ModalFooter>
        </Modal>
    );
};
