import React, { FC } from "react";
import styles from "./css/Product.module.css";

import { formatCurrency } from "../../../utils/currency";
import { IProduct } from "../../../models/Product";
type Props = {
  product: IProduct;
  removeFromCart: (product: IProduct) => void;
};

const Product: any = ({ product, removeFromCart }: Props) => {
  return (
    <li className={styles.product}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.productWrapper}>
        <p className={styles.productTitle}>{product.title}</p>
        <div className={styles.productFooter}>
          {/* TODO: price => to component */}
          <p className={styles.productPrice}>{formatCurrency(product.price)}</p>
          <button
            onClick={() => removeFromCart(product)}
            className="button primary"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export { Product };
