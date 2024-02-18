import React from "react";
import { LucideIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type TSocialIcon = {
  icon: LucideIcon;
  tooltip: string;
};

const SocialIcon = ({ icon, tooltip }: TSocialIcon) => {
  const Icon = icon;

  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="h-10 w-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
          <Icon />
        </span>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

export default SocialIcon;
