import { useReducer } from "react";
import * as actions from "./actions";
import { reducer, initState } from "./reducers";
import { StateInterface } from "./reducers/types";
import { memoFn } from "../../utils";
import { WrappedActions } from "./types";

const wrapActions = memoFn((dispatch: Function) =>
  Object.keys(actions).reduce<Partial<WrappedActions>>(
    (acc, key) => ({
      ...acc,
      [key]: (...args: any[]): void => {
        dispatch(actions[key](...args));
      }
    }),
    {}
  )
);

const useDataState = (): [StateInterface, Partial<WrappedActions>] => {
  const [state, dispatch] = useReducer(reducer, initState);
  const wrappedActions: Partial<WrappedActions> = wrapActions(dispatch);

  return [state, wrappedActions];
};

export default useDataState;
