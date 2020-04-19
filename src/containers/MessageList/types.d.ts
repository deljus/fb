export interface MessageListInterface {
  messages: {
    [id: string]: {
      text: string;
      type: "danger" | "warning" | "success" | "info";
    };
  };
  skipMessage?: (id: string) => any;
}
