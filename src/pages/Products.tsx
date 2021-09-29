import React, { useState, useEffect, FC } from "react";
import { formatCurrency } from "utils/currency";
import styles from "css/pages/Products.module.css";
import { Button } from "antd";

import { Filter } from "components/Filter";
import { Sort } from "components/Sort";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Product } from "components/pages/products/Product";
import { IProduct } from "models/Product";
import { ISort } from "models/Sort";
import { IFilter } from "models/Filter";

const Products: FC = () => {
  const {
    fetchProducts,
    filterProducts,
    sortProducts,
    addToCart,
    setFilterSize,
    setSortType,
  } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  const { list } = useTypedSelector((state) => state.products);
  const { size } = useTypedSelector((state) => state.filter);
  const { type } = useTypedSelector((state) => state.sort);

  const setSortProducts = (sortType: ISort) => {
    setSortType(sortType);
    sortProducts(sortType);
  };

  const setFilterProducts = (filterType: IFilter) => {
    setFilterSize(filterType);
    filterProducts(filterType);
  };

  const addProductToCart = (product: IProduct) => {
    addToCart(product);
  };

  return (
    <>
      <div className={styles.filterResult}>{list.length}</div>
      <div className={styles.productsNavbar}>
        <Sort sort={type} setSortType={setSortProducts} />
        <Filter size={size} setFilterSize={setFilterProducts} />
      </div>

      {!list.length ? (
        <h2 className={styles.productsEmptyState}>Not products yet...</h2>
      ) : (
        <ul className={styles.productsList}>
          {list.map((product: IProduct) => (
            <Product
              key={product._id}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export { Products };
