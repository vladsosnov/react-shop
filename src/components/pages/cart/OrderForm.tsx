import React, { FC } from "react";

import styles from "css/components/pages/OrderForm.module.css";
import { IOrder } from "models/Cart";

type Props = {
  order: IOrder;
  createOrder: (order: IOrder, e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OrderForm: FC<Props> = ({ createOrder, handleInput, order }: Props) => {
  return (
    <form className={styles.orderForm} onSubmit={(e) => createOrder(order, e)}>
      <ul className={styles.orderFormContainer}>
        <li className={styles.orderFormItem}>
          <label className={styles.orderFormItemLabel}>Email</label>
          <input
            name="email"
            type="email"
            required
            className={styles.orderFormItemInput}
            onChange={(e) => handleInput(e)}
          />
        </li>
        <li>
          <label className={styles.orderFormItemLabel}>Name</label>
          <input
            name="name"
            type="text"
            required
            className={styles.orderFormItemInput}
            onChange={(e) => handleInput(e)}
          />
        </li>
        <li>
          <label className={styles.orderFormItemLabel}>Address</label>
          <input
            name="address"
            type="text"
            required
            className={styles.orderFormItemInput}
            onChange={(e) => handleInput(e)}
          />
        </li>
        <li className={styles.orderFormItemLabel}>
          <button className="button primary" type="submit">
            Checkout
          </button>
        </li>
      </ul>
    </form>
  );
};

export { OrderForm };
