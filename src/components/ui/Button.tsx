import type { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: boolean;
}

export const Button = ({
    children,
    className,
    variant = "primary",
    size,
    rounded = false,
    ...props
}: ButtonProps) => {
    const base = "cursor-pointer transition-colors duration-200 font-medium focus:outline-none flex items-center justify-center";

    const variantClasses: Record<ButtonVariant, string> = {
        primary: "bg-[#B489DE] text-white hover:bg-[#9b6dc5]",
        secondary: "bg-gray-100 text-black hover:bg-gray-200",
    }

    const sizeClasses: Record<ButtonSize, string> = {
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
    }

    const roundedClass = rounded && "rounded-full"

    return (
        <button
            type="button"
            className={cn(base, variantClasses[variant], size && sizeClasses[size], roundedClass, className)}
            {...props}
        >
            {children}
        </button>
    );
};
