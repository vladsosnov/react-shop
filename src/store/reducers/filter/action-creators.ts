import { IFilter } from "models/Filter";
import { FilterActionEnum, SetFilterAction } from "./types";

export const FilterActionCreators = {
  setFilterSize: (size: IFilter): SetFilterAction => ({
    type: FilterActionEnum.SET_FILTER_SIZE,
    payload: size,
  }),
};
