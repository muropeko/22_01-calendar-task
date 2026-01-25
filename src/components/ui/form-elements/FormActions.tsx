import { Button } from "../Button";

interface Props {
  mode: "create" | "edit"
  onClose: () => void
}

export const FormActions = ({ mode, onClose }: Props) => {
  return (
    <div className="flex justify-center gap-2 pt-4">
      <Button  variant="secondary" onClick={onClose}>Cancel</Button>
      <Button type="submit">{mode === "edit" ? "Update" : "Save"}</Button>
    </div>
  );
};
