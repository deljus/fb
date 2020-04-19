import {
  addPointAction,
  removePointAction,
  movePointAction,
  startLoadingAction,
  setMessageAction,
  skipMessageAction,
  stopLoadingAction
} from "./actions";
import {
  ADD_NEW_POINT,
  MOVE_POINT,
  REMOVE_POINT,
  START_LOADING,
  STOP_LOADING,
  SET_MESSAGE,
  SKIP_MESSAGE
} from "../constants";

describe("data actions", () => {
  it("should be return action obj", () => {
    expect(addPointAction("text")).toEqual({
      type: ADD_NEW_POINT,
      payload: { name: "text" }
    });
    expect(removePointAction("id")).toEqual({
      type: REMOVE_POINT,
      payload: { id: "id" }
    });
    expect(movePointAction(1, 3)).toEqual({
      type: MOVE_POINT,
      payload: { fromId: 1, toId: 3 }
    });
    expect(startLoadingAction()).toEqual({ type: START_LOADING });
    expect(stopLoadingAction()).toEqual({ type: STOP_LOADING });
    expect(setMessageAction("1", "error text")).toEqual({
      type: SET_MESSAGE,
      payload: { id: "1", text: "error text", type: "danger" }
    });
    expect(skipMessageAction("1")).toEqual({
      type: SKIP_MESSAGE,
      payload: { id: "1" }
    });
  });
});
