import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  href: string;
  target: string;
  download: boolean;
}

const ActionButton = ({
  icon: Icon,
  href,
  target = "_blank",
  download = false,
}: ActionButtonProps) => {
  return (
    <a
      download={download}
      target={target}
      href={href}
      className="w-10 h-10 lg:w-14 lg:h-14 font-bold bg-green-400 text-black p-2 lg:p-4 rounded-full border-2 border-black flex items-center justify-center"
    >
      <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
    </a>
  );
};

export default ActionButton;
