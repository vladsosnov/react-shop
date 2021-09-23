import { ISort } from "models/Sort";
import { SortActionEnum, SetSortAction } from "./types";

export const SortActionCreators = {
  setSortType: (type: ISort): SetSortAction => ({
    type: SortActionEnum.SET_SORT_TYPE,
    payload: type,
  }),
};
