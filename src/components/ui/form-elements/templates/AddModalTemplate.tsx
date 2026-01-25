import { Modal, ModalContent, ModalHeader } from "../../modal";
import { EventForm } from "../EventForm";
import type { TemplateProps } from "./DeleteModalTemplate";

export const AddModalTemplate = ({ isOpen, onClose }: TemplateProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader title="Create Event" description="Fill the form to add a new event" />
      <ModalContent>
        <EventForm onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};
