import { useForm, type FieldErrors, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEventContext } from "../../../hooks/useEventContext";
import { useCalendarContext } from "../../../hooks";
import { EVENT_TYPES, type IEvent } from "../../../types";
import { type EventFormValues, eventSchema } from "./EventForm.schema";

import { FormActions } from "./FormActions";

import { DateFields, TitleField, TypeField } from "./fields";
import { getDefaultEventDates, toDateTimeLocalString } from "../../../utils/time";

interface Props {
  onClose: () => void
  mode?: "create" | "edit"
  initialEvent?: IEvent
}

export interface FieldProps {
  register: UseFormRegister<EventFormValues>
  errors?: FieldErrors<EventFormValues>
  options?: readonly string[]
}

export const EventForm = ({ onClose, mode = "create", initialEvent}: Props) => {
  const { addEvent, updateEvent } = useEventContext()
  const { selectedDate } = useCalendarContext()
  
  const { start: defaultStart, end: defaultEnd } = getDefaultEventDates(selectedDate)

  const { register, handleSubmit, formState: { errors }} = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialEvent
      ? {
          title: initialEvent.title,
          startDate: toDateTimeLocalString(initialEvent.start),
          endDate: toDateTimeLocalString(initialEvent.end),
          type: initialEvent.type,
        }
      : {
          title: "",
          startDate: toDateTimeLocalString(defaultStart),
          endDate: toDateTimeLocalString(defaultEnd),
          type: "normal",
        }
  })

  const onSubmit = async (data: EventFormValues) => {
    try {
      const event: IEvent = {
        ...(initialEvent ?? {}),
        title: data.title,
        start: new Date(data.startDate),
        end: new Date(data.endDate),
        type: data.type,
      };

      if (mode === "edit") {
        await updateEvent(event);
      } else {
        await addEvent(event);
      }

      onClose();
    } catch (err) {
      console.error("smth went wrong: ", err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md flex flex-col gap-4"
    >
      <TitleField register={register} errors={errors} />
      <DateFields register={register} errors={errors} />
      <TypeField register={register} options={EVENT_TYPES} />
      <FormActions mode={mode} onClose={onClose} />
    </form>
  );
};

