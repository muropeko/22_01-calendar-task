import type { ReactNode } from "react";

interface Props {
    children: ReactNode
    error?: string
}

export const FieldWrapper = ({ children, error }: Props) => (
    <div className="flex flex-col gap-1">
        {children}
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
);
