import { cn } from "@/lib/utils";
import { IChildrenProps, IClassNameProps } from "@/types";

// Can add more props to this component later
// like onClick, onMouseOver, etc.
interface ICardProps extends IChildrenProps, IClassNameProps {}

export default function Card({ className, children }: ICardProps) {
  return (
    <article className={cn("border rounded-lg", className)}>{children}</article>
  );
}
