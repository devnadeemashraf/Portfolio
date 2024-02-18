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
        {handles.map(({ icon, tooltip, target, href }, index) => {
          return (
            <SocialIcon
              key={index}
              icon={icon}
              tooltip={tooltip}
              target={target}
              href={href}
            />
          );
        })}
      </ul>
    </TooltipProvider>
  );
};

export default SocialIconsContainer;
