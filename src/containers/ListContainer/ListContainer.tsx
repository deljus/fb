import React, { FC, ReactElement } from "react";
import { DraggableList, ListItem } from "../../components";
import { ListContainerInterface } from "./types";

const ListContainer: FC<ListContainerInterface> = ({
  list,
  deleteItem,
  moveItem
}) => (
  <DraggableList
    items={list}
    onMoveItems={moveItem}
    renderItems={({ id, name, color }, prov): ReactElement => (
      <ListItem
        id={id}
        text={name}
        colorMark={color}
        onDeleteItem={deleteItem}
        innerRef={prov.innerRef}
        {...prov.draggableProps}
        {...prov.dragHandleProps}
      />
    )}
  />
);

export default ListContainer;
