import React, { useState, useEffect, FC } from "react";
import { formatCurrency } from "utils/currency";
import styles from "css/pages/Cart.module.css";
import { Button } from "antd";

import { Product } from "components/pages/cart/Product";
import { OrderForm } from "components/pages/cart/OrderForm";
import { IProduct } from "models/Product";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IOrder } from "models/Cart";

const Cart: FC = () => {
  const { fetchCartItems, removeFromCart, createOrder } = useActions();

  useEffect(() => {
    fetchCartItems(JSON.parse(localStorage.getItem("cartItems") || "") || []);
  }, []);

  const { cartItems } = useTypedSelector((state) => state.cart);

  const [order, setOrder] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);

  const handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setOrder({ ...order, [target.name]: target.value });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className={styles.cart && styles.cartHeader}>Cart is empty</div>
      ) : (
        <div className={styles.cart && styles.cartHeader}>
          You have {cartItems.length} products in the cart{" "}
        </div>
      )}

      <div className={styles.cart}>
        <ul className={styles.cartItems}>
          {cartItems.map((item: IProduct) => (
            <Product
              key={item._id}
              product={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      </div>

      {cartItems.length !== 0 && (
        <div>
          <div className={styles.cart}>
            <div className={styles.total}>
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce(
                    (a: number, c: IProduct) => a + c.price * c.count!,
                    0
                  )
                )}
              </div>
              <Button onClick={() => setShowCheckout(true)} type="primary">
                Proceed
              </Button>
            </div>
          </div>
          {showCheckout && (
            <div className={styles.cart}>
              <OrderForm
                createOrder={createOrder}
                handleInput={handleInput}
                order={order as IOrder}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { Cart };
