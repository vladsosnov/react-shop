import { IFilter } from "../../../models/Filter";
import { FilterAction, FilterActionEnum, FilterState } from "./types";

const initialState: FilterState = {
  size: "ALL",
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
