import {
  AddPointActionType,
  ChangeMapCenterActionType,
  ChangePointCoordinateActionType,
  MovePointActionType,
  RemovePointActionType,
  SetMessageActionType,
  SkipMessageActionType,
  StartLoadingActionType,
  StopLoadingActionType
} from "./actions/types";

export interface WrappedActions {
  skipMessageAction: (id: string) => SkipMessageActionType;
  setMessageAction: (
    id: string,
    text: string,
    type?: string
  ) => SetMessageActionType;
  stopLoadingAction: () => StopLoadingActionType;
  startLoadingAction: () => StartLoadingActionType;
  changeMapCenter: (coordinate: [number, number]) => ChangeMapCenterActionType;
  movePointAction: (fromId: number, toId: number) => MovePointActionType;
  removePointAction: (id: string) => RemovePointActionType;
  changePointCoordinateAction: (
    id: string,
    coordinates: [number, number]
  ) => ChangePointCoordinateActionType;
  addPointAction: (name: string) => AddPointActionType;
}
