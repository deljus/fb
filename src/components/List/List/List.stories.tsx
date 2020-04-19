import React, { FC } from "react";
import List from "./List";
import { ListItem } from "../ListItem";

export default {
  title: "List",
  parameters: {
    info: { inline: true }
  }
};

const items = [
  { id: "1", color: "#f44336", text: "text text" },
  { id: "2", color: "#e91e63", text: "text text text" },
  { id: "3", color: "#9c27b0", text: "text text text text" },
  { id: "4", color: "#673ab7", text: "text text text text text" },
  { id: "5", color: "#3f51b5", text: "text text text text text text" }
];

export const base: FC = () => (
  <div className="main">
    <div className="wrapper">
      <List>
        {items.map(({ id, text }) => (
          <ListItem key={id} id={id} text={text} />
        ))}
      </List>
    </div>
  </div>
);

export const withClose: FC = () => (
  <div className="main">
    <div className="wrapper">
      <List>
        {items.map(({ id, text }) => (
          <ListItem
            key={id}
            id={id}
            text={text}
            onDeleteItem={(): void => undefined}
          />
        ))}
      </List>
    </div>
  </div>
);

export const colorMark: FC = () => (
  <div className="main">
    <div className="wrapper">
      <List>
        {items.map(({ id, text, color }) => (
          <ListItem
            key={id}
            id={id}
            text={text}
            onDeleteItem={(): void => undefined}
            colorMark={color}
          />
        ))}
      </List>
    </div>
  </div>
);
