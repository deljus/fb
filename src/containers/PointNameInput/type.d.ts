import { AddPointActionType } from "../../core/hooks/useDataState/actions/types";

export interface PointNameInterface {
  addPoint?: (name: string) => AddPointActionType;
  disabled?: boolean;
}
