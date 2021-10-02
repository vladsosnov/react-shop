import { ProductsAction, ProductsActionEnum, ProductsState } from "./types";

const initialState: ProductsState = {
  list: [],
};

const productsReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case ProductsActionEnum.FETCH_PRODUCTS_LIST:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};

export { productsReducer };
