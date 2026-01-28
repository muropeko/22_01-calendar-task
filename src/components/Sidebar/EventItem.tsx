import type { IEvent } from "../../types";
import { Button } from "../ui";

interface Props {
  event: IEvent
  onEdit: () => void
  onDelete: () => void
}

export const EventItem = ({ event, onEdit, onDelete }: Props) => {
  return (
    <div className="flex justify-between items-center gap-10 p-4 border border-white/10 hover:bg-white/5 transition-colors duration-200 cursor-pointer">
      <div>
        <h2 className="font-semibold text-2xl text-white">{event.title}</h2>
        <p className="text-gray-400 text-sm">
          {event.start.toLocaleString()} – {event.end.toLocaleString()}
        </p>
      </div>

      <div className="flex gap-2">
        <Button className="btn" onClick={onEdit}>Edit</Button>
        <Button className="btn" onClick={onDelete} rounded >X</Button>
      </div>
    </div>
  );
};
