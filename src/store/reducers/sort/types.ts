import { ISort } from "models/Sort";

export interface SortState {
  type: ISort;
}

export enum SortActionEnum {
  SET_SORT_TYPE = "SET_SORT_TYPE",
}

export interface SetSortAction {
  type: SortActionEnum.SET_SORT_TYPE;
  payload: ISort;
}

export type SortAction = SetSortAction;
