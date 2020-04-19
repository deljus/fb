import React, { FC } from "react";
import { cn } from "../../core/utils";
import { ColInterface, RowInterface } from "./type";

export const Row: FC<RowInterface> = ({ children, className }) => (
  <div className={cn("grid-row", className)}>{children}</div>
);

export const Col: FC<ColInterface> = ({ children, span, width, className }) => {
  const spanStyle = span ? `col-${span}` : "";
  return (
    <div
      className={cn("grid-col", spanStyle, className)}
      style={{ minWidth: width, width }}
    >
      {children}
    </div>
  );
};
