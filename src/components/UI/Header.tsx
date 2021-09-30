import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "css/UI/Header.module.css";
import { Menu, Dropdown, Button } from "antd";
import { useHistory } from "react-router";
import { useTypedSelector } from "hooks/useTypedSelector";
import { RouteNames } from "routes";
import { useActions } from "hooks/useActions";

const Header: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const dropdownMenu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item onClick={logout}>Logout</Menu.Item>
    </Menu>
  );

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
        <div className={styles.link}>
          {isAuth ? (
            <Dropdown overlay={dropdownMenu} arrow>
              <Button>{user.username}</Button>
            </Dropdown>
          ) : (
            <div
              className={styles.header__logStatus}
              onClick={() => router.push(RouteNames.LOGIN)}
            >
              Login
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export { Header };
