import reducer, { initState } from "./reducer";
import { Actions, StateInterface } from "./types";
import {
  addPointAction,
  removePointAction,
  movePointAction,
  changeMapCenter,
  changePointCoordinateAction,
  startLoadingAction,
  stopLoadingAction,
  setMessageAction,
  skipMessageAction
} from "../actions";

const setupReducer = (
  action: Actions,
  init: StateInterface = initState
): StateInterface => reducer(init, action);

describe("reducer", () => {
  it("should be returned new state with an array containing a new point", () => {
    expect(setupReducer(addPointAction("name"))).toEqual({
      ...initState,
      points: [
        {
          color: expect.any(String),
          coordinates: expect.any(Array),
          id: expect.any(String),
          name: "name"
        }
      ]
    });
  });
  it("should be returned new state with an empty array of points", () => {
    expect(
      setupReducer(removePointAction("id"), {
        ...initState,
        points: [
          {
            color: "color",
            coordinates: [0, 0],
            id: "id",
            name: "name"
          }
        ]
      })
    ).toEqual({
      ...initState,
      points: []
    });
  });
  it("should be returned new state  with the changed positions of the elements", () => {
    expect(
      setupReducer(movePointAction(0, 1), {
        ...initState,
        points: [
          {
            color: "color",
            coordinates: [0, 0],
            id: "id-1",
            name: "name-1"
          },
          {
            color: "color",
            coordinates: [0, 0],
            id: "id-2",
            name: "name-2"
          }
        ]
      })
    ).toEqual({
      ...initState,
      points: [
        {
          color: "color",
          coordinates: [0, 0],
          id: "id-2",
          name: "name-2"
        },
        {
          color: "color",
          coordinates: [0, 0],
          id: "id-1",
          name: "name-1"
        }
      ]
    });
  });
  it("should be returned new state with a new center coordinates", () => {
    expect(setupReducer(changeMapCenter([10, 10]))).toEqual({
      ...initState,
      center: [10, 10]
    });
  });
  it("should be returned new state with a new center point coordinate", () => {
    expect(
      setupReducer(changePointCoordinateAction("test-id", [10, 10]), {
        ...initState,
        points: [
          {
            color: "color",
            coordinates: [0, 0],
            id: "test-id",
            name: "name-2"
          }
        ]
      })
    ).toEqual({
      ...initState,
      points: [
        {
          color: "color",
          coordinates: [10, 10],
          id: "test-id",
          name: "name-2"
        }
      ]
    });
  });
  it("should be returned new state with a loading true", () => {
    expect(setupReducer(startLoadingAction())).toEqual({
      ...initState,
      loading: true
    });
  });
  it("should be returned new state with a loading false", () => {
    expect(
      setupReducer(stopLoadingAction(), { ...initState, loading: true })
    ).toEqual({
      ...initState,
      loading: false
    });
  });
  it("should be returned new state with a new message", () => {
    expect(setupReducer(setMessageAction("testId", "Text", "info"))).toEqual({
      ...initState,
      messages: {
        testId: {
          text: "Text",
          type: "info"
        }
      }
    });
  });
  it("should be returned new state with a empty message", () => {
    expect(
      setupReducer(skipMessageAction("testId"), {
        ...initState,
        messages: {
          testId: {
            text: "Text",
            type: "info"
          }
        }
      })
    ).toEqual({
      ...initState,
      messages: {}
    });
  });
});
