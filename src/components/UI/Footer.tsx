import React, { FC } from "react";
import styles from "css/UI/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      Created by{" "}
      <a
        href="https://github.com/vladsosnov"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["footer__git-link"]}
      >
        Vlad
      </a>
    </footer>
  );
};

export { Footer };
