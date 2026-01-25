import type { PropsWithChildren } from "react";

export const Label = ({ children }: PropsWithChildren) => {
  return (
    <label className="text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};
