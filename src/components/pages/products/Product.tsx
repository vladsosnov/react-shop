import React, { FC } from "react";
import styles from "css/components/pages/Product.module.css";

import { formatCurrency } from "utils/currency";
import { IProduct } from "models/Product";

type Props = {
  product: IProduct;
  openModal: (product: IProduct) => void;
  addProductToCart: (product: IProduct) => void;
};

const Product: FC<Props> = ({
  product,
  openModal,
  addProductToCart,
}: Props) => {
  return (
    <li className={styles.product}>
      <a
        href={"#" + product._id}
        className={styles.productModalLink}
        onClick={() => openModal(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <p className={styles.productTitle}>{product.title}</p>
      </a>
      <div className={styles.productFooter}>
        <p className={styles.productPrice}>{formatCurrency(product.price)}</p>
        <button
          onClick={() => addProductToCart(product)}
          className="button primary"
        >
          Add To Cart
        </button>
      </div>
    </li>
  );
};

export { Product };
