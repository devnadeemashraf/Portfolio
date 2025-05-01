"use client";

import Tab from "@/components/common/tab";

function Header() {
  return (
    <header className="sm:hidden min-h-[62px] flex grow shrink-0 basis-0 gap-2 p-2 bg-background-muted rounded-lg border border-border">
      <Tab useLink label="About" href="/" />
      <Tab useLink label="Projects" href="/projects" />
      <Tab useLink label="Contact" href="/contacts" />
    </header>
  );
}

Header.displayName = "Header";

export default Header;
