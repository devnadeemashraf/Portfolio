import React, { JSX } from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IStyledIconProps extends React.ComponentPropsWithoutRef<LucideIcon> {
  size?: number;
  strokeWidth?: number;
  className?: string;
  debug?: boolean;
}

/**
 * A Higher Order Component that takes in a Lucide React icon and returns a styled component.
 * @param Icon - The Lucide React icon to be styled.
 * @returns A styled component that renders the icon with the specified styles.
 */
export default function withIconStyle(icon: LucideIcon) {
  return function IconComponent(props: IStyledIconProps): JSX.Element {
    const Comp = icon;

    const iconSize = props.size ? props.size : 18;
    const iconStrokeWidth = props.strokeWidth ? props.strokeWidth : 2;
    const isDebug = props.debug ? props.debug : false;
    const cName = props.className;

    return (
      <Comp
        size={iconSize}
        strokeWidth={iconStrokeWidth}
        className={cn("", isDebug ? "border" : "", cName)}
      />
    );
  };
}

/**
 * Export the `TIcon` type, which is the return type of the `withIconStyle` function.
 */
export type TIcon = ReturnType<typeof withIconStyle>;
