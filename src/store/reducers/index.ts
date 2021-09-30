import { authReducer as auth } from "./auth";
import { cartReducer as cart } from "./cart";
import { productsReducer as products } from "./products";
import { filterReducer as filter } from "./filter";
import { sortReducer as sort } from "./sort";

export const reducers = {
  auth,
  cart,
  products,
  filter,
  sort,
};
