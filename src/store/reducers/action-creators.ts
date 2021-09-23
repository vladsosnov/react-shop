import { AuthActionCreators } from "./auth/action-creators";
import { ProductsActionCreators } from "./products/action-creators";
import { FilterActionCreators } from "./filter/action-creators";
import { CartActionCreators } from "./cart/action-creators";
import { SortActionCreators } from "./sort/action-creators";

export const allActionCreators = {
  ...ProductsActionCreators,
  ...AuthActionCreators,
  ...FilterActionCreators,
  ...CartActionCreators,
  ...SortActionCreators,
};
