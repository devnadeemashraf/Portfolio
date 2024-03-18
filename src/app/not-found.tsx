import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[60px]">404</h1>
      </div>
      <Link
        href="/"
        className="px-6 py-2 hover:bg-green-200 rounded-md transition-colors"
      >
        <span>Return Home</span>
      </Link>
    </div>
  );
};
export default NotFound;
