import { IProduct } from "./../../../models/Product";

export interface ProductsState {
  list: IProduct[];
}

export enum ProductsActionEnum {
  FETCH_PRODUCTS_LIST = "FETCH_PRODUCTS_LIST",
}

export interface FetchProductsListAction {
  type: ProductsActionEnum.FETCH_PRODUCTS_LIST;
  payload: IProduct[];
}

export type ProductsAction = FetchProductsListAction;
