import { MouseEvent } from "react";

export interface ButtonInterface {
  /** Button type */
  type?: "primary" | "secondary" | "danger" | "warning" | "info" | "success";
  /** Circle button */
  circle?: boolean;
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Make background transparent and invert text and border colors */
  ghost?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
}
