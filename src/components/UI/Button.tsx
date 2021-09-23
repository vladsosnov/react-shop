import React, { FC } from "react";

import styles from "css/UI/Button.module.css";

type Props = {
  type: "submit" | "reset" | "button";
  text: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ onClick, text, type }: Props) => {
  return (
    <button type={type} className={styles.button} onClick={() => onClick}>
      {text}
    </button>
  );
};

export { Button };
