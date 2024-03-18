import { cn } from "@/lib/utils";
import { TChildrenProps } from "@/types";

interface CardProps extends TChildrenProps {
  title: string;
  className?: string;
}

const InformationSection = ({ title, className, children }: CardProps) => {
  return (
    <div className={cn("w-full h-full", className)}>
      <h1 className="text-lg lg:text-2xl font-medium mb-1">{title}</h1>
      {children}
    </div>
  );
};
export default InformationSection;
