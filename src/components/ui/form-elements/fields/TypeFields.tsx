import { Label } from "../../Label";
import type { FieldProps } from "../EventForm";
import { FieldWrapper } from "./FieldWrapper";

export const TypeField = ({ register, options }: FieldProps) => {
  return (
    <FieldWrapper>
        <Label>Event type</Label>
        <select {...register("type")} className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#B489DE]">
            {options?.map((o) => (
                <option key={o} value={o}>
                    {o.charAt(0).toUpperCase() + o.slice(1)}
                </option>
            ))}
        </select>
    </FieldWrapper>
  );
};
