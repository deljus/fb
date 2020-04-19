import { PointType } from "../../core/hooks/useDataState/reducers/types";

export type PointListType = Array<PointType>;

export interface ListContainerInterface {
  list: PointListType;
  deleteItem?: (id: string) => any;
  moveItem?: (fromId: number, toId: number) => any;
}
