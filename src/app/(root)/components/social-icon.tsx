import React, { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type TSocialIcon = {
  icon: LucideIcon;
  tooltip: string;
  target: string;
  href: string;
};

const SocialIcon = ({ icon, tooltip, href, target }: TSocialIcon) => {
  const Icon = icon;
  const [downloadable, setDownloadable] = useState(false);

  useEffect(() => {
    if (tooltip === "Download Resume") {
      setDownloadable(true);
    }
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger>
        <a
          href={href}
          target={target}
          download={downloadable}
          className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
        >
          <Icon />
        </a>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

export default SocialIcon;
