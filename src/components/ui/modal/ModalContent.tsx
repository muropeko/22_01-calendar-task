import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ModalContent = ({ children }: Props) => (
  <div className="px-6 pb-4 flex-1 overflow-y-auto">{children}</div>
);
