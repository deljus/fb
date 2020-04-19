import { ReactComponentElement } from "react";

type ItemType = any;
type ItemsType = Array<ItemType>;

export interface ListInterface {
  /** List items */
  items?: ItemsType;
  /** Callback function to render list items element */
  renderItems?: (ItemType) => ReactComponentElement;
}
