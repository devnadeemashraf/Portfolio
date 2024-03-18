import { Download, File, Github, Linkedin, Moon, Twitter } from "lucide-react";
import ActionButton from "./actionButton";

const Footer = () => {
  return (
    <footer className="absolute bottom-[-20px] lg:bottom-[-30px] left-[1.25rem] w-full flex gap-2 lg:gap-4">
      <ActionButton
        href="/nadeem-resume.pdf"
        target=""
        download
        icon={Download}
      />

      <ActionButton
        href="https://github.com/devnadeemashraf"
        target="_blank"
        download={false}
        icon={Github}
      />
      <ActionButton
        href="https://linkedin.com/in/nadeemashraf06"
        target="_blank"
        download={false}
        icon={Linkedin}
      />
      <ActionButton
        href="https://twitter.com/MNadeemAshraf06"
        target="_blank"
        download={false}
        icon={Twitter}
      />
    </footer>
  );
};

export default Footer;
