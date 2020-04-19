import React, { FC } from "react";
import { LoaderInterface } from "./types";

const Loader: FC<LoaderInterface> = ({ loading }) =>
  loading ? (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  ) : null;

export default Loader;
