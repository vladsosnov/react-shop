import React from "react";
import styles from "css/components/Filter.module.css";

const Filter = ({ setFilterSize, size }: any) => {
  return (
    <div className={styles.filterStyle}>
      <div>
        Filter&nbsp;
        <select value={size} onChange={(e) => setFilterSize(e)}>
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export { Filter };
