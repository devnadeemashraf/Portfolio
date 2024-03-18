import { cn } from "@/lib/utils";
import { TChildrenProps } from "@/types";
import Link from "next/link";

interface LabelChipProps extends TChildrenProps {
  type: "red" | "yellow" | "green";
  href: string;
  isNavigator: boolean;
}

const LabelChip = ({
  type = "green",
  href = "",
  isNavigator = false,
  children,
}: LabelChipProps) => {
  if (isNavigator) {
    return (
      <Link
        href={href}
        className={cn(
          "w-fit h-10 lg:h-14 font-bold px-4 lg:px-6 lg:py-4 text-sm lg:text-lg border-2 border-black rounded-full flex items-center justify-center",
          type == "red" ? "bg-red-500 text-black" : "",
          type == "yellow" ? "bg-yellow-500 text-black" : "",
          type == "green" ? "bg-green-400 text-black" : ""
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "w-fit h-10 lg:h-14 font-bold px-4 lg:px-6 lg:py-4 text-sm lg:text-lg border-2 border-black rounded-full flex items-center justify-center",
        type == "red" ? "bg-red-500 text-black" : "",
        type == "yellow" ? "bg-yellow-500 text-black" : "",
        type == "green" ? "bg-green-500 text-black" : ""
      )}
    >
      {children}
    </div>
  );
};

export default LabelChip;
