import { Modal, ModalContent, ModalHeader } from "../../modal";
import { EventForm } from "../EventForm";
import type { TemplateProps } from "./DeleteModalTemplate";


export const EditModalTemplate = ({ isOpen, onClose, event }: TemplateProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader title="Edit Event" description="Update event details" />
      <ModalContent>
        <EventForm
          mode="edit"
          initialEvent={event}
          onClose={onClose}
        />
      </ModalContent>
    </Modal>
  );
};
