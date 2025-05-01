"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import type { TIcon } from "@/hoc/with-icon-style";

interface ITabProps {
  label: string;
  useLink?: boolean;
  href?: string;
  icon?: TIcon | null;
  onClick?: () => void;
}

const tabClass = {
  default:
    "grow font-manrope font-semibold text-sm flex items-center justify-center rounded-lg hover:rounded-2xl px-[16px] py-[12px] gap-1 transition-all duration-200 ease-in-out border",
  idle: "border-tab-border bg-tab-background text-tab-foreground hover:bg-tab-background__hover",
  active:
    "bg-tab-background--active text-tab-foreground--active hover:bg-tab-background--active__hover",
};

export default function Tab({
  label,
  href = "/",
  icon = null,
  onClick,
  useLink = false,
}: ITabProps) {
  const pathname = usePathname();
  const Icon = icon;

  if (useLink) {
    return (
      <Link
        href={href}
        className={cn(
          tabClass.default,
          pathname === href ? tabClass.active : tabClass.idle
        )}
      >
        {Icon && <Icon strokeWidth={2.5} />}
        <h3>{label}</h3>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={cn(
        tabClass.default,
        pathname === href ? tabClass.active : tabClass.idle
      )}
    >
      {Icon && <Icon />}
      <h3>{label}</h3>
    </button>
  );
}
