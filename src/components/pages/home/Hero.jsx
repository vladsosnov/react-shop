import React from "react";
import styles from "./css/Hero.module.css";

const Hero = ({ moveToSliderHandler }) => {
  return (
    <div className={styles.hero}>
      <div className={styles["inner-hero"]}>
        <div className={styles["hero-title"]}>
          <h1 className={styles["hero-heading"]}>React shop app</h1>
          {/* TODO add smooth scroll */}
          <button
            className={styles["hero-button"]}
            onClick={moveToSliderHandler}
          >
            To discounts
          </button>
        </div>
      </div>
    </div>
  );
};

export { Hero };
