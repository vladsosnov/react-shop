import React, { FC } from "react";
import styles from "css/components/pages/Product.module.css";
import { Button } from "antd";

import { formatCurrency } from "utils/currency";
import { IProduct } from "models/Product";
type Props = {
  product: IProduct;
  removeFromCart: (product: IProduct) => void;
};

const Product: FC<Props> = ({ product, removeFromCart }) => {
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
          <Button danger onClick={() => removeFromCart(product)} type="primary">
            Remove From Cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export { Product };
