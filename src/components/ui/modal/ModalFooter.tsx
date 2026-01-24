import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ModalFooter = ({ children }: Props) => (
  <div className="px-6 py-4 border-t border-gray-200 flex justify-center gap-2">{children}</div>
);
