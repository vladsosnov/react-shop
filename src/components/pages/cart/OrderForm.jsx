import React from "react";

import styles from "./css/OrderForm.module.css";

const OrderForm = ({ createOrder, handleInput, order }) => {
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
