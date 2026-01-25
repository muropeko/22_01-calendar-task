import { useState } from "react";
import { useCalendarContext, useEventContext } from "../../hooks";
import { EditModalTemplate, DeleteModalTemplate } from "../ui/form-elements/templates";
import type { IEvent } from "../../types";
import { EventItem } from "./EventItem";

export const SidebarEventList = () => {
  const { selectedDate } = useCalendarContext()
  const { getByDay } = useEventContext()

  const dayEvents = getByDay(selectedDate)

  const [activeEvent, setActiveEvent] = useState<IEvent | null>(null)
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null)

  const openModal = (type: "edit" | "delete", event: IEvent) => {
    setActiveEvent(event)
    setModalType(type)
  };

  const closeModal = () => {
    setActiveEvent(null)
    setModalType(null)
  };

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-3">
      {dayEvents.length > 0 ? (
        dayEvents.map(event => (
          <EventItem
            key={event.id}
            event={event}
            onEdit={() => openModal("edit", event)}
            onDelete={() => openModal("delete", event)}
          />
        ))
      ) : (
        <h1 className="mt-10 text-center text-2xl text-gray-500">
          Nothing
        </h1>
      )}

      {modalType === "edit" && activeEvent && (
        <EditModalTemplate
          isOpen
          onClose={closeModal}
          event={activeEvent}
        />
      )}

      {modalType === "delete" && activeEvent && (
        <DeleteModalTemplate
          isOpen
          onClose={closeModal}
          event={activeEvent}
        />
      )}
    </div>
  );
};
