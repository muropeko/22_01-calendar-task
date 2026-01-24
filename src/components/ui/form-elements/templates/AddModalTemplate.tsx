import { Modal, ModalContent, ModalHeader } from "../../modal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const AddModalTemplate = ({ isOpen, onClose }: Props) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("add");
        onClose();
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalHeader
                title="Create Event"
                description="Fill the form to add a new event"
            />

            <ModalContent>
                <form onSubmit={handleSubmit}>
                    create event

                    <div className="mt-6 flex justify-center gap-3">
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
