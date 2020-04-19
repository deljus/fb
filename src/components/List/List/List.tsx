import React, { FC } from "react";
import { ListInterface } from "./types";

const List: FC<ListInterface> = ({ children, items, renderItems }) => (
  <div className="list-container">
    {children || (renderItems && items && items.map(renderItems))}
  </div>
);

export default List;
