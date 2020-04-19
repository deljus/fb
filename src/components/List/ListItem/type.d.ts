import { RefAttributes } from "react";

export interface ListInterface {
  /** Unique identifier */
  id: string;
  /** List item text */
  text: string;
  /** Callback function on click trash icon */
  onDeleteItem?: (number) => void;
  /** Mark color */
  colorMark?: string;
  style?: any;
  innerRef?: RefAttributes;
  className?: string;
}
