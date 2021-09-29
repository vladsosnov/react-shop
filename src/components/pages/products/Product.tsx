import React, { FC } from "react";
import styles from "css/components/pages/Product.module.css";
import { Card } from "antd";

import { formatCurrency } from "utils/currency";
import { IProduct } from "models/Product";
import { Button } from "antd";

type Props = {
  product: IProduct;
  addProductToCart: (product: IProduct) => void;
};

const { Meta } = Card;

const Product: FC<Props> = ({ product, addProductToCart }) => {
  return (
    <li className={styles.product}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={product.title} src={product.image} />}
      >
        <Meta
          title={product.title}
          description={formatCurrency(product.price)}
        />

        <br />

        <Button
          style={{ background: "#389e0d", borderColor: "#389e0d" }}
          type="primary"
          onClick={() => addProductToCart(product)}
        >
          Add To Cart
        </Button>
      </Card>
    </li>
  );
};

export { Product };
