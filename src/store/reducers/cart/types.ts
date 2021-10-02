import { IOrder } from "./../../../models/Cart";
import { IProduct } from "models/Product";

export interface CartState {
  order: IOrder | null;
  cartItems: IProduct[];
}

export enum CartActionEnum {
  FETCH_CART_ITEMS = "FETCH_CART_ITEMS",
  CREATE_ORDER = "CREATE_ORDER",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export interface FetchCartItemsAction {
  type: CartActionEnum.FETCH_CART_ITEMS;
  payload: IProduct[];
}

export interface CreateOrderAction {
  type: CartActionEnum.CREATE_ORDER;
  payload: IOrder | null;
}

export interface AddToCartAction {
  type: CartActionEnum.ADD_TO_CART;
  payload: IProduct;
}

export interface RemoveFromCartAction {
  type: CartActionEnum.REMOVE_FROM_CART;
  payload: IProduct;
}

export type CartAction =
  | FetchCartItemsAction
  | CreateOrderAction
  | AddToCartAction
  | RemoveFromCartAction;
