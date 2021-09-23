import React, { useState, useEffect, FC } from "react";
import { formatCurrency } from "utils/currency";
import Modal from "react-modal";

import { Filter } from "components/Filter";
import { Sort } from "components/Sort";

import styles from "css/pages/Products.module.css";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Product } from "components/pages/products/Product";
import { IProduct } from "models/Product";

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

  const [product, setProduct] = useState<IProduct | null>();

  const openModal = (product: any) => setProduct(product);
  const closeModal = () => setProduct(null);

  const setSortProducts = (e: React.SyntheticEvent) => {
    const target = e.target as any;

    setSortType(target.value);
    sortProducts(target.value);
  };

  const setFilterProducts = (e: React.SyntheticEvent) => {
    const target = e.target as any;

    setFilterSize(target.value);
    filterProducts(target.value);
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
        <h2 className={styles.productsEmptyState}>Not any products...</h2>
      ) : (
        <ul className={styles.productsList}>
          {list.map((product): any => (
            <Product
              key={product._id}
              product={product}
              openModal={openModal}
              addProductToCart={addProductToCart}
            />
          ))}
        </ul>
      )}
      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <button className="close-modal" onClick={closeModal}>
            x
          </button>
          <div className={styles.productDetails}>
            <img src={product.image} alt={product.title}></img>
            <div className={styles.productDetailsDescription}>
              <p>
                <strong>{product.title}</strong>
              </p>
              <p>{product.description}</p>
              <p>
                Available Sizes:{" "}
                {product.availableSizes.map((x) => (
                  <span key={x}>
                    {" "}
                    <button className="button">{x}</button>
                  </span>
                ))}
              </p>
              <div className={styles.productPrice}>
                <div>{formatCurrency(product.price)}</div>
                <button
                  className="button primary"
                  onClick={() => {
                    addProductToCart(product);
                    closeModal();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export { Products };
