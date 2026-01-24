// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const TestButton: React.FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
  const base = "px-4 py-2 rounded text-white font-medium cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-400 hover:bg-gray-500";

  return <button className={`${base} ${styles} ${className || ""}`} {...props} />;
};
