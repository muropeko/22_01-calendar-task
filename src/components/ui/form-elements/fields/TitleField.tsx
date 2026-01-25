import { Input } from "../../Input";
import { Label } from "../../Label";
import type { FieldProps } from "../EventForm";
import { FieldWrapper } from "./FieldWrapper";

export const TitleField = ({ register, errors }: FieldProps) => {
  return (
    <FieldWrapper error={errors && errors.title?.message as string}>
      <Label>Title</Label>
      <Input id="title" {...register("title")} placeholder="Enter event name..." />
    </FieldWrapper>
  );
};