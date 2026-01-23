import type { PropsWithChildren } from "react";
import { Button } from "../ui";
import { cn } from "../../utils/clsx";

interface TabButtonProps extends PropsWithChildren {
  active?: boolean;
  onClick?: () => void;
}

export const TabButton = ({ active = false, children, onClick }: TabButtonProps) => {
    return (
        <Button
            className={cn("px-6 py-4 font-bold flex items-center justify-center",
                active
                    ? "bg-[#FF8B00] text-white hover:bg-orange-500"
                    : "bg-white text-black hover:bg-gray-100"
            )}
            rounded={false}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
