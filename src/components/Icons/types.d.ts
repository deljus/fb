import { MouseEvent } from "react";

export interface SizesType {
  sm: [number, number];
  lg: [number, number];
  md: [number, number];
}

export interface IconsInterface {
  /** icon size */
  size?: keyof SizesType;
  /** icon type */
  type: "del" | "close";
}
