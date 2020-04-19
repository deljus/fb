import React, { FC } from "react";
import { ListInterface } from "./type";
import Icon from "../../Icons/Icon";
import Button from "../../Button/Button";
import { cn } from "../../../core/utils";

const ListItem: FC<ListInterface> = ({
  id,
  text,
  colorMark,
  onDeleteItem,
  innerRef,
  className,
  ...rest
}) => {
  const handleClick = (): void => {
    if (onDeleteItem) onDeleteItem(id);
  };

  return (
    <div key={id} className={cn("card", className)} ref={innerRef} {...rest}>
      <span>
        {colorMark && (
          <div className="color-line" style={{ backgroundColor: colorMark }} />
        )}
        {text}
      </span>
      {onDeleteItem && (
        <Button type="danger" size="sm" onClick={handleClick} ghost>
          <Icon type="del" />
        </Button>
      )}
    </div>
  );
};

export default ListItem;
