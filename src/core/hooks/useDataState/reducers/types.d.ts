import {
  AddPointActionType,
  MovePointActionType,
  ChangePointCoordinateActionType,
  SkipMessageActionType,
  ChangeMapCenterActionType,
  StopLoadingActionType,
  StartLoadingActionType,
  RemovePointActionType,
  SetMessageActionType
} from "../actions/types";

export type Actions =
  | AddPointActionType
  | AddPointActionType
  | MovePointActionType
  | ChangeMapCenterActionType
  | ChangePointCoordinateActionType
  | SkipMessageActionType
  | StopLoadingActionType
  | StartLoadingActionType
  | RemovePointActionType
  | SetMessageActionType;

export interface PointType {
  id: string;
  name: string;
  color: string;
  coordinates: [number, number];
}

export interface StateInterface {
  center: [number, number];
  points: Array<PointType>;
  loading: boolean;
  messages: {
    [id: string]: {
      text: string;
      type: "danger" | "info" | "warning" | "success";
    };
  };
}
