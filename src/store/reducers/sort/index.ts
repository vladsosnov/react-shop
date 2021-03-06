import { SortAction, SortActionEnum, SortState } from "./types";

const initialState: SortState = {
  type: "latest",
};

const sortReducer = (state = initialState, action: SortAction): SortState => {
  switch (action.type) {
    case SortActionEnum.SET_SORT_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
};

export { sortReducer };
