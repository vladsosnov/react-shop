import { IProduct } from "models/Product";
import { ProductsAction, ProductsActionEnum, ProductsState } from "./types";

const initialState: ProductsState = {
  list: [] as IProduct[],
};

export default function productsReducer(
  state = initialState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case ProductsActionEnum.FETCH_PRODUCTS_LIST:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
