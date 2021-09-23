import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = "/",
  LOGIN = "/login",
  PRODUCTS = "/products",
  CART = "/cart",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, exact: true, component: Home },
  { path: RouteNames.PRODUCTS, exact: true, component: Products },
  { path: RouteNames.CART, exact: true, component: Cart },
];
