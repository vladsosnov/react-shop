import { IProduct } from "models/Product";

export interface IOrder {
  email: string;
  name: string;
  address: string;
}
export interface ICart {
  order: IOrder;
  cartItems: IProduct[];
}
