import React, { FC } from "react";
import DraggableList from "./DraggableList";
import { ListItem } from "../ListItem";

export default {
  title: "DraggableList",
  parameters: {
    info: { inline: true }
  }
};

export const base: FC = () => (
  <div className="main">
    <div className="wrapper">
      <DraggableList
        items={[
          {
            id: "1",
            text: "text 1"
          },
          {
            id: "2",
            text: "text 2"
          },
          {
            id: "3",
            text: "text 3"
          },
          {
            id: "4",
            text: "text 4"
          },
          {
            id: "5",
            text: "text 5"
          }
        ]}
        renderItems={({ id, text }, prov) => (
          <ListItem
            id={id}
            text={text}
            innerRef={prov.innerRef}
            {...prov.draggableProps}
            {...prov.dragHandleProps}
          />
        )}
        onMoveItems={(): void => undefined}
      />
    </div>
  </div>
);
