"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Mail } from "lucide-react";

import ActionButton from "./actionButton";
import LabelChip from "./labelChip";

const Header = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <header className="absolute top-[-20px] lg:top-[-28px] left-[1.25rem] w-full flex gap-2 lg:gap-4 z-10">
      <LabelChip href="/" isNavigator type="green">
        <span>Nadeem Ashraf</span>
      </LabelChip>

      <ActionButton
        href="mailto:official.nadeemashraf@gmail.com"
        target="_blank"
        download={false}
        icon={Mail}
      />
    </header>
  );
};

const Breadcrumbs = ({ paths }: { paths: string[] }) => {
  return (
    <nav className="flex items-center">
      {paths.map((item) => {
        return (
          <Link
            href={`/${item}`}
            key={item}
            className="font-bold bg-green-500 text-black px-4 py-2 text-lg border-2 border-black rounded-full animate-in capitalize"
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};

export default Header;
