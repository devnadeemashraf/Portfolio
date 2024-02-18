import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

import SocialIcon, { TSocialIcon } from "./social-icon";

type SocialIconsContainer = {
  handles: TSocialIcon[];
};

const SocialIconsContainer = ({ handles }: SocialIconsContainer) => {
  return (
    <TooltipProvider>
      <ul className="text-muted-foreground">
        {handles.map((handle, index) => {
          return (
            <SocialIcon
              key={index}
              icon={handle.icon}
              tooltip={handle.tooltip}
            />
          );
        })}
      </ul>
    </TooltipProvider>
  );
};

export default SocialIconsContainer;
