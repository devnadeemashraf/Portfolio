import { FileDown, Github, Linkedin } from "lucide-react";

import { TSocialIcon } from "./app/(root)/components/social-icon";
import { TSkillCard } from "./app/(root)/components/skill-card";

export const socialHandles: TSocialIcon[] = [
  {
    icon: Github,
    tooltip: "Github",
    target: "_blank",
    href: "https://github.com/devNadeemAshraf",
  },
  {
    icon: Linkedin,
    tooltip: "LinkedIn",
    target: "_blank",
    href: "https://www.linkedin.com/in/nadeem-ashraf-112675204/",
  },
  {
    icon: FileDown,
    tooltip: "Download Resume",
    target: "",
    href: "/nadeem-resume.pdf",
  },
];

export const skillsList: TSkillCard[] = [
  {
    title: "TypeScript",
    srcURL: "/assets/ts.svg",
    content:
      "One year of hands on experience working with TypeScript. Used it in my personal projects as well as on projects that I have collaborated on with freinds or in the Open Source Community",
  },
  {
    title: "JavaScript",
    srcURL: "/assets/js.svg",
    content:
      "Two years of hands on experience working with JavaScript. Mainly used at work where the Job was to write Automated Bots which were eventually APIs interacting with the Company's backend.",
  },
  {
    title: "React",
    srcURL: "/assets/react.svg",
    content:
      "One year of hands on experience working with React. Used it in my personal projects as well as on projects that I have collaborated on with freinds or in the Open Source Community",
  },
];

export const additionalSkillsList: TSkillCard[] = [
  {
    title: "NextJS",
    srcURL: "/assets/next.svg",
    content: "",
  },
  {
    title: "NodeJS",
    srcURL: "/assets/node.svg",
    content: "",
  },
  {
    title: "Express",
    srcURL: "/assets/express.svg",
    content: "",
  },
  {
    title: "MongoDB",
    srcURL: "/assets/mongodb.svg",
    content: "",
  },
  {
    title: "PostgreSQL",
    srcURL: "/assets/postgresql.svg",
    content: "",
  },
  {
    title: "Redis",
    srcURL: "/assets/redis.svg",
    content: "",
  },
  {
    title: "Github",
    srcURL: "/assets/git.svg",
    content: "",
  },
  {
    title: "Docker",
    srcURL: "/assets/docker.svg",
    content: "",
  },
];
