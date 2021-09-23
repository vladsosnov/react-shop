import React from "react";
import styles from "css/components/pages/Hero.module.css";

const Hero: any = ({ moveToSliderHandler }: any): any => {
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
