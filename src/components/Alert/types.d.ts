export interface AlertInterface {
  /** Unique identifier */
  id: string;
  /** Type of alert */
  type: "danger" | "warning" | "success" | "info";
  /** Text to display */
  text: string;
  /** Callback function called by click the "Close" button or when the time specified in the "timeout" property has expired  */
  onClose?: (id: string) => void;
  /** Time in milliseconds of calling the onClose function  */
  timeOut?: number;
}
