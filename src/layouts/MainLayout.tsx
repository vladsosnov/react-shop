import React, { FC } from "react";

import { Header } from "components/UI/Header";
import { Footer } from "components/UI/Footer";

import styles from "css/layouts/MainLayout.module.css";

const MainLayout: FC = (props) => {
  return (
    <div className={styles.rootContainer}>
      <Header />
      <main className={styles.mainLayout}>{props.children}</main>
      <Footer />
    </div>
  );
};

export { MainLayout };
