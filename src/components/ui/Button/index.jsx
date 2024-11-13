import * as classes from "./Button.module.css";

import { forwardRef } from "react";

const BUTTON_VARIANTS = ["primary", "secondary"];

const Button = forwardRef((props, ref) => {
  const {
    type,
    variant = "primary",
    asChild = false,
    children,
    className = "",
  } = props;

  if (!BUTTON_VARIANTS.includes(variant)) {
    throw new Error(
      `Invalid Button 'variant' specified. Allowed variants: ${BUTTON_VARIANTS.join(
        ", "
      )}`
    );
  }

  const variantCSS = `button-${variant}`;

  let Component = "button";
  if (asChild) {
    Component = "span";
  }

  return (
    <Component
      ref={ref}
      className={`${classes["button"]} ${classes[variantCSS]} ${className}`}
      type={type}
    >
      {children}
    </Component>
  );
});

export default Button;
