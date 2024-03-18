import { TChildrenProps } from "@/types";

const Section = ({ children }: TChildrenProps) => {
  return <section className="relative w-[100%] h-[95%]">{children}</section>;
};

export default Section;
