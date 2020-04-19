import {
  ADD_NEW_POINT,
  REMOVE_POINT,
  MOVE_POINT,
  CHANGE_MAP_CENTER,
  CHANGE_POINT_COORDINATES,
  START_LOADING,
  STOP_LOADING,
  SET_MESSAGE,
  SKIP_MESSAGE
} from "../constants";
import {
  AddPointActionType,
  MovePointActionType,
  RemovePointActionType,
  ChangeMapCenterActionType,
  ChangePointCoordinateActionType,
  StartLoadingActionType,
  StopLoadingActionType,
  SetMessageActionType,
  SkipMessageActionType,
  MessageType
} from "./types";

export const addPointAction = (name: string): AddPointActionType => ({
  type: ADD_NEW_POINT,
  payload: {
    name
  }
});

export const changePointCoordinateAction = (
  id: string,
  coordinates: [number, number]
): ChangePointCoordinateActionType => ({
  type: CHANGE_POINT_COORDINATES,
  payload: {
    id,
    coordinates
  }
});

export const removePointAction = (id: string): RemovePointActionType => ({
  type: REMOVE_POINT,
  payload: {
    id
  }
});

export const movePointAction = (
  fromId: number,
  toId: number
): MovePointActionType => ({
  type: MOVE_POINT,
  payload: {
    fromId,
    toId
  }
});

export const changeMapCenter = (
  coordinate: [number, number]
): ChangeMapCenterActionType => ({
  type: CHANGE_MAP_CENTER,
  payload: {
    coordinate
  }
});

export const startLoadingAction = (): StartLoadingActionType => ({
  type: START_LOADING
});

export const stopLoadingAction = (): StopLoadingActionType => ({
  type: STOP_LOADING
});

export const setMessageAction = (
  id: string,
  text: string,
  type: MessageType = "danger"
): SetMessageActionType => ({
  type: SET_MESSAGE,
  payload: {
    id,
    text,
    type
  }
});

export const skipMessageAction = (id: string): SkipMessageActionType => ({
  type: SKIP_MESSAGE,
  payload: {
    id
  }
});
