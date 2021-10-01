import React, { useEffect, FC } from "react";
import styles from "css/pages/Products.module.css";

import { Filter, Sort } from "components";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Product } from "components/pages/products/Product";
import { IProduct, ISort, IFilter } from "models";

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
  }, [fetchProducts]);

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
