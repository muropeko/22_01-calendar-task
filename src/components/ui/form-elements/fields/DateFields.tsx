import { Input } from "../../Input";
import { Label } from "../../Label";
import type { FieldProps } from "../EventForm";
import { FieldWrapper } from "./FieldWrapper";

export const DateFields = ({ register, errors }: FieldProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
        <FieldWrapper error={errors && errors.startDate?.message as string}>
            <Label>Start</Label>
            <Input id="startDate" type="datetime-local" {...register("startDate")} />
        </FieldWrapper>

        <FieldWrapper error={errors && errors.endDate?.message as string}>
            <Label>Start</Label>
            <Input id="endDate" type="datetime-local" {...register("endDate")} />
        </FieldWrapper>
    </div>
  );
};
