import React, { FC } from "react";
import Icon from "./Icon";
import * as iconsType from "./all";

export default {
  title: "Icons",
  parameters: {
    info: { inline: true }
  }
};

export const base: FC = () => (
  <div className="icons">
    {(Object.keys(iconsType) as Array<keyof typeof iconsType>).map(type => (
      <div key={`icon-${type}`} className="icon-wrapper">
        <Icon type={type} />
      </div>
    ))}
  </div>
);
