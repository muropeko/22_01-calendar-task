import type { IEvent } from "../../../../types";
import { Modal, ModalFooter, ModalHeader } from "../../modal";
import { useEventContext } from "../../../../hooks/useEventContext";
import { Button } from "../../";

export interface TemplateProps {
    isOpen: boolean;
    onClose: () => void;
    event?: IEvent;
}

export const DeleteModalTemplate = ({ isOpen, onClose, event }: TemplateProps) => {
    const { deleteEvent } = useEventContext();

    const handleSubmit = async () => {
        if (event) await deleteEvent(event.id!)
        onClose()
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalHeader title="Delete Event" description="Are you sure you want to delete this event?" />
            <ModalFooter>
                <Button onClick={handleSubmit}>Delete</Button>
            </ModalFooter>
        </Modal>
    );
};
