import React from "react";

import { Header } from "../components/UI/Header";
import { Footer } from "../components/UI/Footer";

import styles from "./css/MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>{props.children}</main>
      <Footer />
    </>
  );
};

export { MainLayout };
