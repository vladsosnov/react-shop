import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "css/UI/Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <Link to="/cart" className={styles.link}>
          Cart
        </Link>
      </nav>
    </header>
  );
};

export { Header };