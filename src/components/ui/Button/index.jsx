import * as classes from "./Button.module.css";

import { forwardRef } from "react";

const BUTTON_VARIANTS = ["primary", "secondary"];

const Button = forwardRef((props, ref) => {
  const {
    type,
    variant = "primary",
    asChild = false,
    onClick = () => {},
    className = "",
    children,
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
      type={type}
      onClick={onClick}
      className={`${classes["button"]} ${classes[variantCSS]} ${className}`}
    >
      {children}
    </Component>
  );
});

export default Button;
