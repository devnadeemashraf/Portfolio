import { TChildrenProps } from "@/types";

const MainContainer = ({ children }: TChildrenProps) => {
  return (
    <main className="border-2 border-black rounded-md w-full h-full overflow-auto px-6 py-10 flex flex-col">
      {children}
    </main>
  );
};

export default MainContainer;
