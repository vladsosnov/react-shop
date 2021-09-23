import { IOrder } from "./../../../models/Cart";
import { IProduct } from "models/Product";
import {
  CartActionEnum,
  FetchCartItemsAction,
  CreateOrderAction,
  AddToCartAction,
  RemoveFromCartAction,
} from "./types";

export const CartActionCreators = {
  fetchCartItems: (cartItems: IProduct[]): FetchCartItemsAction => ({
    type: CartActionEnum.FETCH_CART_ITEMS,
    payload: cartItems,
  }),
  addToCart: (product: IProduct): AddToCartAction => ({
    type: CartActionEnum.ADD_TO_CART,
    payload: product,
  }),
  removeFromCart: (product: IProduct): RemoveFromCartAction => ({
    type: CartActionEnum.REMOVE_FROM_CART,
    payload: product,
  }),
  createOrder: (order: IOrder): CreateOrderAction => ({
    type: CartActionEnum.CREATE_ORDER,
    payload: order,
  }),
};
