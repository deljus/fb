import React, { FC, createElement } from "react";
import { IconsInterface, SizesType } from "./types";
import * as icons from "./all";

const sizes: SizesType = {
  sm: [15, 15],
  md: [40, 40],
  lg: [60, 60]
};

const Icon: FC<IconsInterface> = ({ size = "sm", type }) => {
  const elem = icons[type];
  return (
    <span className="icon">{createElement(elem, { size: sizes[size] })}</span>
  );
};
export default Icon;
