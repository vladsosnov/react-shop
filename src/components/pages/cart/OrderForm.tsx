import React, { FC } from "react";

import styles from "css/components/pages/OrderForm.module.css";
import { Button, Form, Input } from "antd";
import { rules } from "utils/rules";
import { IOrder } from "models/Cart";
type Props = {
  order: IOrder | null;
  createOrder: (order: IOrder | null) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OrderForm: FC<Props> = ({ createOrder, handleInput, order }) => {
  return (
    <Form className={styles.orderForm} onFinish={() => createOrder(order)}>
      <ul className={styles.orderFormContainer}>
        <Form.Item
          label="email"
          name="email"
          rules={[rules.required("Input your email")]}
        >
          <Input name="email" onChange={(e) => handleInput(e)} />
        </Form.Item>
        <Form.Item
          label="name"
          name="name"
          rules={[rules.required("Input your name")]}
        >
          <Input name="name" onChange={(e) => handleInput(e)} />
        </Form.Item>
        <Form.Item
          label="address"
          name="address"
          rules={[rules.required("Input your address")]}
        >
          <Input name="address" onChange={(e) => handleInput(e)} />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#389e0d", borderColor: "#389e0d" }}
        >
          Checkout
        </Button>
      </ul>
    </Form>
  );
};

export { OrderForm };
