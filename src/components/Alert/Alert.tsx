import React, { FC, useEffect } from "react";
import { cn } from "../../core/utils";
import Icon from "../Icons/Icon";
import Button from "../Button/Button";
import { AlertInterface } from "./types";

const Alert: FC<AlertInterface> = ({ id, text, type, onClose, timeOut }) => {
  useEffect(() => {
    let timerId: number | null = null;
    if (onClose && timeOut) {
      timerId = window.setTimeout(() => {
        onClose(id);
      }, timeOut);
    }
    return (): void => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  const handleClose = (): void => {
    if (onClose) onClose(id);
  };

  return (
    <div className={cn("alert", type)}>
      <span className="text">{text}</span>
      {onClose && (
        <Button type={type} size="sm" onClick={handleClose}>
          <Icon type="close" />
        </Button>
      )}
    </div>
  );
};

export default Alert;
