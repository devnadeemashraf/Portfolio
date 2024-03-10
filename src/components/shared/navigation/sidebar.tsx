"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Mail, X } from "lucide-react";

import { NavigationContext } from "@/context/navigation-context";
import { Button } from "@/components/ui/button";

import { NAVLINKS } from "@/constants/nav-links";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Contact from "../contact";

const NavigationSidebar = () => {
  const [pathname, setPathname] = useState("");

  const sidebarRef = useRef<HTMLElement | null>(null);

  const { sidebarVisible, toggleSidebarVisiblity } =
    useContext(NavigationContext);

  const handleSidebarToggleState = () => {
    if (sidebarRef) {
      switch (sidebarVisible) {
        case true: {
          sidebarRef.current?.classList.add("aside-hidden");
          sidebarRef.current?.classList.remove("aside-visible");
          break;
        }
        case false: {
          sidebarRef.current?.classList.add("aside-visible");
          sidebarRef.current?.classList.remove("aside-hidden");
          break;
        }
      }
    }
  };

  useEffect(() => {
    handleSidebarToggleState();
  }, [sidebarVisible]);

  // Set Pathname on Page Load
  useEffect(() => {
    setPathname(window.document.location.href);
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={
        "absolute md:static md:flex flex-col items-center justify-between w-full md:w-[40rem] h-screen bg-primary/5 backdrop-blur-xl py-10 gap-5 z-10"
      }
    >
      {/* Close Aside Button */}
      <Button
        size="icon"
        variant="link"
        onClick={() => toggleSidebarVisiblity()}
        className="md:hidden absolute top-4 right-4 text-foreground hover:text-primary"
      >
        <X size={24} className="" />
      </Button>

      {/* Header */}
      <div className="flex flex-col items-center justify-center px-10 mt-10">
        <span className="text-primary/50 mb-5">
          Portfolio Revamp in process...
        </span>

        <h1 className="scroll-m-20 text-3xl text-center font-extrabold tracking-tight text-primary">
          Nadeem Ashraf
        </h1>
        <span className="text-sm text-foreground/60 text-center">
          Work Experience:{" "}
          <strong>{new Date().getFullYear() - 2021} years</strong> and
          counting...
        </span>
      </div>

      {/* Nav Links */}
      <nav className="w-full flex flex-col items-center justify-center px-10 mt-10">
        {NAVLINKS.map((link, index) => {
          return (
            <Link
              key={link.title}
              role="button"
              onClick={() => toggleSidebarVisiblity()}
              href={link.href}
              className="group w-full h-16 text-xl font-medium flex items-center justify-center capitalize"
            >
              <span className={`group-hover:text-primary transition-colors`}>
                {link.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Contact Button */}
      <Dialog>
        <div className="w-full flex items-center justify-center mt-10">
          <DialogTrigger asChild className="">
            <Button className="w-80">
              <span>Contact</span> <Mail size={18} className="ml-4" />
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send an Email</DialogTitle>
            <DialogDescription>
              I do check my Emails on a regular basis and I will get back to you
              as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <Contact />
        </DialogContent>
      </Dialog>
    </aside>
  );
};

export default NavigationSidebar;
