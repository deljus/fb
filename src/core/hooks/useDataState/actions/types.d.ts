import {
  ADD_NEW_POINT,
  REMOVE_POINT,
  MOVE_POINT,
  CHANGE_MAP_CENTER,
  CHANGE_POINT_COORDINATES,
  START_LOADING,
  STOP_LOADING,
  SKIP_MESSAGE,
  SET_MESSAGE
} from "../constants";

export type AddPointActionType = {
  type: typeof ADD_NEW_POINT;
  payload: {
    name: string;
  };
};

export type ChangePointCoordinateActionType = {
  type: typeof CHANGE_POINT_COORDINATES;
  payload: {
    id: string;
    coordinates: [number, number];
  };
};

export type RemovePointActionType = {
  type: typeof REMOVE_POINT;
  payload: {
    id: string;
  };
};

export type MovePointActionType = {
  type: typeof MOVE_POINT;
  payload: {
    fromId: number;
    toId: number;
  };
};

export type ChangeMapCenterActionType = {
  type: typeof CHANGE_MAP_CENTER;
  payload: {
    coordinate: [number, number];
  };
};

export type MessageType = "danger" | "warning" | "success" | "info";

export type StartLoadingActionType = {
  type: typeof START_LOADING;
};

export type StopLoadingActionType = {
  type: typeof STOP_LOADING;
};

export type SetMessageActionType = {
  type: typeof SET_MESSAGE;
  payload: {
    id: string;
    text: string;
    type: MessageType;
  };
};

export type SkipMessageActionType = {
  type: typeof SKIP_MESSAGE;
  payload: {
    id: string;
  };
};
