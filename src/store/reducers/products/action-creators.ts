import { IFilter } from "models/Filter";
import { ISort } from "models/Sort";
import { IProduct } from "models/Product";
import { FetchProductsListAction, ProductsActionEnum } from "./types";
import { AppDispatch } from "store/index";
import axios, { AxiosResponse } from "axios";

export const ProductsActionCreators = {
  fetchProductsList: (list: IProduct[]): FetchProductsListAction => ({
    type: ProductsActionEnum.FETCH_PRODUCTS_LIST,
    payload: list,
  }),
  fetchProducts: () => async (dispatch: AppDispatch) => {
    try {
      const list: AxiosResponse = await axios.get<IProduct[]>(
        "./products.json"
      );

      dispatch(ProductsActionCreators.fetchProductsList(list.data.products));
    } catch (e) {
      console.log("error: ", e);
    }
  },
  filterProducts: (sort: IFilter) => async (dispatch: AppDispatch) => {
    const list: AxiosResponse = await axios.get<IProduct[]>("./products.json");
    console.log("list", list);
    const products = list.data.products;

    const filteredProducts = !sort
      ? products
      : products.filter(
          (product: IProduct) => product.availableSizes.indexOf(sort) >= 0
        );

    dispatch(ProductsActionCreators.fetchProductsList(filteredProducts));
  },
  sortProducts: (filter: ISort) => async (dispatch: AppDispatch) => {
    const list: AxiosResponse = await axios.get<IProduct[]>("./products.json");
    const products = list.data.products;

    const sortedProducts = [...products].sort((a, b) => {
      switch (filter) {
        case "lowest":
          return a.price > b.price ? 1 : -1;

        case "highest":
          return a.price < b.price ? 1 : -1;

        default:
          return a._id < b._id ? 1 : -1;
      }
    });

    dispatch(ProductsActionCreators.fetchProductsList(sortedProducts));
  },
};
