import { TChildrenProps } from "@/types";

const Chip = ({ children }: TChildrenProps) => {
  return (
    <span className="px-3 lg:px-4 py-2 bg-green-200 text-black rounded-full text-sm lg:text-base select-none">
      {children}
    </span>
  );
};

export default Chip;
