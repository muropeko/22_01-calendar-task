import type { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
    rounded?: boolean
    type?: "submit" | "button"
}

export const Button = ({
    children,
    className,
    variant = "primary",
    type = "submit",
    rounded = false,
    ...props
}: ButtonProps) => {
    const base = "rounded-md px-4 py-2 text-sm font-medium cursor-pointer";

    const variantClasses: Record<ButtonVariant, string> = {
        primary: "text-white bg-[#B489DE] hover:bg-[#B489DE]/80",
        secondary: "text-gray-600 hover:bg-gray-100"
    }

    const roundedClass = rounded && "rounded-full"

    return (
        <button
            type={type}
            className={cn(base, variantClasses[variant], roundedClass, className)}
            {...props}
        >
            {children}
        </button>
    );
};
