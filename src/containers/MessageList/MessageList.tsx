import React, { FC } from "react";
import { Alert } from "../../components";
import { MessageListInterface } from "./types";

const MessageList: FC<MessageListInterface> = ({ messages, skipMessage }) => (
  <div className="alert-container">
    {Object.keys(messages).map(key => (
      <Alert
        id={key}
        key={key}
        text={messages[key].text}
        type={messages[key].type}
        onClose={messages[key].type !== "danger" ? skipMessage : undefined}
        timeOut={messages[key].type !== "danger" ? 3000 : undefined}
      />
    ))}
  </div>
);

export default MessageList;
