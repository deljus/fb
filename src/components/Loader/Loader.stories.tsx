import React, { FC } from "react";
import Loader from "./Loader";

export default {
  title: "Loader",
  parameters: {
    info: { inline: true }
  }
};

export const base: FC = () => (
  <div className="main">
    <div className="grid-wrapper">
      <Loader loading />
    </div>
  </div>
);
