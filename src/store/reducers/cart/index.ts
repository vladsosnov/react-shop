import { ICart } from "./../../../models/Cart";

import { CartAction, CartActionEnum, CartState } from "./types";

const initialState: CartState = {
  order: {},
  cartItems: [],
};

export default function cartReducer(
  state = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case CartActionEnum.FETCH_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CartActionEnum.CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case CartActionEnum.REMOVE_FROM_CART:
      const cartAfterRemove = [
        ...state.cartItems.filter((x: any) => x._id !== action.payload._id),
      ];
      localStorage.setItem("cartItems", JSON.stringify(cartAfterRemove));

      return {
        ...state,
        cartItems: cartAfterRemove,
      };

    case CartActionEnum.ADD_TO_CART:
      let alreadyInCart = false;

      state.cartItems.forEach((item: any) => {
        if (item._id === action.payload._id) {
          item.count++;
          alreadyInCart = true;
        }
      });

      if (!alreadyInCart) {
        state.cartItems.push({ ...action.payload, count: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify([...state.cartItems]));

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
}
