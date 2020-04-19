import React, { FC } from "react";
import { ButtonInterface } from "./types";
import { cn } from "../../core/utils";

const Button: FC<ButtonInterface> = ({
  children,
  onClick,
  type = "primary",
  circle,
  size = "md",
  ghost
}) => (
  <button
    type="button"
    className={cn(
      "button",
      `btn-${type}`,
      circle ? "circle" : null,
      ghost ? "ghost" : null,
      `size-${size}`
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
