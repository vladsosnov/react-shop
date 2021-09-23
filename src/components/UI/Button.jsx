import React from "react";

import styles from "css/UI/Button.module.css";

const Button = ({ onClick, text, type }) => {
  return (
    <button type={type} className={styles.button} onClick={() => onClick}>
      {text}
    </button>
  );
};

export { Button };
