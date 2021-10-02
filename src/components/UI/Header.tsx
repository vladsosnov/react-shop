import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "css/UI/Header.module.css";
import { Menu, Dropdown } from "antd";
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
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <Link to="/cart" className={styles.link}>
          Cart
        </Link>
        {isAuth ? (
          <Dropdown className={styles.link} overlay={dropdownMenu}>
            <div>{user?.username}</div>
          </Dropdown>
        ) : (
          <div
            className={styles.link}
            onClick={() => router.push(RouteNames.LOGIN)}
          >
            Login
          </div>
        )}
      </nav>
    </header>
  );
};

export { Header };
