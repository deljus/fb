import {
  ADD_NEW_POINT,
  MOVE_POINT,
  REMOVE_POINT,
  CHANGE_MAP_CENTER,
  CHANGE_POINT_COORDINATES,
  SET_MESSAGE,
  SKIP_MESSAGE,
  START_LOADING,
  STOP_LOADING
} from "../constants";
import { DEFAULT_MAP_CENTER } from "../../../../config";
import { Actions, StateInterface, PointType } from "./types";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#fdd835",
  "#e65100"
];

export const initState = {
  center: DEFAULT_MAP_CENTER,
  points: [],
  loading: false,
  messages: {}
};

const reorder = (
  state: StateInterface,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(state.points);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reducer = (state: StateInterface, action: Actions): StateInterface => {
  switch (action.type) {
    case ADD_NEW_POINT:
      return {
        ...state,
        points: [
          ...state.points,
          {
            id: Math.random()
              .toString(36)
              .substring(2, 7),
            name: action.payload.name,
            color: colors[Math.floor(Math.random() * colors.length)],
            coordinates: state.center
          }
        ]
      };
    case REMOVE_POINT:
      return {
        ...state,
        points: state.points.filter(
          (point: PointType) => point.id !== action.payload.id
        )
      };
    case MOVE_POINT:
      const { fromId, toId } = action.payload;
      return { ...state, points: reorder(state, fromId, toId) };

    case CHANGE_MAP_CENTER:
      return {
        ...state,
        center: action.payload.coordinate
      };

    case CHANGE_POINT_COORDINATES:
      return {
        ...state,
        points: state.points.map(point => ({
          ...point,
          coordinates:
            point.id === action.payload.id
              ? action.payload.coordinates
              : point.coordinates
        }))
      };
    case START_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.id]: {
            text: action.payload.text,
            type: action.payload.type
          }
        }
      };
    case SKIP_MESSAGE:
      // eslint-disable-next-line no-param-reassign
      delete state.messages[action.payload.id];
      return {
        ...state,
        messages: {
          ...state.messages
        }
      };
    default:
      return state;
  }
};

export default reducer;
