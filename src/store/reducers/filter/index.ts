import { FilterAction, FilterActionEnum, FilterState } from "./types";
import { IFilter } from "models/Filter";

const initialState: FilterState = {
  size: IFilter.All,
};

export default function filterReducer(
  state = initialState,
  action: FilterAction
): FilterState {
  switch (action.type) {
    case FilterActionEnum.SET_FILTER_SIZE:
      if (!action.payload) {
        return {
          size: action.payload,
        };
      }

      return {
        ...state,
        size: action.payload,
      };

    default:
      return state;
  }
}
