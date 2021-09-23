import { IFilter } from "models/Filter";

export interface FilterState {
  size: IFilter;
}

export enum FilterActionEnum {
  SET_FILTER_SIZE = "SET_FILTER_SIZE",
}

export interface SetFilterAction {
  type: FilterActionEnum.SET_FILTER_SIZE;
  payload: IFilter;
}

export type FilterAction = SetFilterAction;
