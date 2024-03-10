import { FileDown, Github, Linkedin } from "lucide-react";

import { TSocialIcon } from "@/app/(root)/components/social-icon";

export const socialHandles: TSocialIcon[] = [
  {
    icon: Github,
    tooltip: "Github",
    target: "_blank",
    href: "https://github.com/devnadeemashraf",
  },
  {
    icon: Linkedin,
    tooltip: "LinkedIn",
    target: "_blank",
    href: "https://www.linkedin.com/in/nadeemashraf06",
  },
  {
    icon: FileDown,
    tooltip: "Download Resume",
    target: "",
    href: "/nadeem-resume.pdf",
  },
];
