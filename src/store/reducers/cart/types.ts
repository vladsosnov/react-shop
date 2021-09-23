import { ICart } from "./../../../models/Cart";

export interface CartState {
  order: any;
  cartItems: any;
}

export enum CartActionEnum {
  FETCH_CART_ITEMS = "FETCH_CART_ITEMS",
  CREATE_ORDER = "CREATE_ORDER",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export interface FetchCartItemsAction {
  type: CartActionEnum.FETCH_CART_ITEMS;
  payload: any;
}

export interface CreateOrderAction {
  type: CartActionEnum.CREATE_ORDER;
  payload: any;
}

export interface AddToCartAction {
  type: CartActionEnum.ADD_TO_CART;
  payload: any;
}

export interface RemoveFromCartAction {
  type: CartActionEnum.REMOVE_FROM_CART;
  payload: any;
}

export type CartAction =
  | FetchCartItemsAction
  | CreateOrderAction
  | AddToCartAction
  | RemoveFromCartAction;
