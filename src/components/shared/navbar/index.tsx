"use client";

import Image from "next/image";
import Link from "next/link";

import Navlinks from "./navlinks";

import { sendSiteInteractionNotification } from "@/lib/helpers";

const Navbar = () => {
  return (
    <header className="w-full min-h-[74px] flex items-center justify-between">
      <Link href="/" className="group">
        <Image
          className="group-hover:rotate-90 transition-all ease-in-out"
          width={18}
          height={18}
          src="/assets/asterisk.svg"
          alt="alt"
        />
      </Link>

      {/* Navlinks */}
      <nav className="flex items-center justify-center gap-6">
        <a
          onClick={() =>
            sendSiteInteractionNotification("Someone Downloaded your resume!")
          }
          download
          href="/nadeem-resume.pdf"
          className="cursor-pointer"
        >
          <Navlinks text="resume" />
        </a>

        <Link
          onClick={() =>
            sendSiteInteractionNotification(
              "Someone Visited your Blog Section!"
            )
          }
          href="/blog"
        >
          <Navlinks text="blog" />
        </Link>

        <Link
          onClick={() =>
            sendSiteInteractionNotification("Someone Tried Contacting You!")
          }
          href="/contact"
        >
          <Navlinks text="contact" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
