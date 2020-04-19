import React, { FC } from "react";
import Alert from "./Alert";

export default {
  title: "Alert",
  parameters: {
    info: { inline: true }
  }
};

export const base: FC = () => (
  <div className="main">
    <div className="wrapper">
      <div>info:</div>
      <Alert id="1" text="Text text text" type="info" />
      <div>success:</div>
      <Alert id="1" text="Text text text" type="success" />
      <div>danger:</div>
      <Alert id="1" text="Text text text" type="danger" />
      <div>warning:</div>
      <Alert id="1" text="Text text text" type="warning" />
    </div>
  </div>
);

export const withClose: FC = () => (
  <div className="main">
    <div className="wrapper">
      <div>info:</div>
      <Alert
        id="1"
        text="Text text text"
        type="info"
        onClose={(): void => undefined}
      />
      <div>success:</div>
      <Alert
        id="1"
        text="Text text text"
        type="success"
        onClose={(): void => undefined}
      />
      <div>danger:</div>
      <Alert
        id="1"
        text="Text text text"
        type="danger"
        onClose={(): void => undefined}
      />
      <div>warning:</div>
      <Alert
        id="1"
        text="Text text text"
        type="warning"
        onClose={(): void => undefined}
      />
    </div>
  </div>
);
