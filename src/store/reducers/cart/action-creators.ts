import { ICart } from "./../../../models/Cart";
import {
  CartActionEnum,
  FetchCartItemsAction,
  CreateOrderAction,
  AddToCartAction,
  RemoveFromCartAction,
} from "./types";

export const CartActionCreators = {
  fetchCartItems: (cartItems: any): FetchCartItemsAction => ({
    type: CartActionEnum.FETCH_CART_ITEMS,
    payload: cartItems,
  }),
  addToCart: (cartItems: any): AddToCartAction => ({
    type: CartActionEnum.ADD_TO_CART,
    payload: cartItems,
  }),
  removeFromCart: (list: []): RemoveFromCartAction => ({
    type: CartActionEnum.REMOVE_FROM_CART,
    payload: list,
  }),
  createOrder: (list: []): CreateOrderAction => ({
    type: CartActionEnum.CREATE_ORDER,
    payload: list,
  }),
};
