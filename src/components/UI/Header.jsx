import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";

const Header = () => {
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
