import React from "react";
import styles from "./css/Sort.module.css";

const Sort: any = ({ setSortType, sort }: any) => {
  return (
    <div className={styles.sortStyle}>
      Order&nbsp;
      <select value={sort} onChange={(e) => setSortType(e)}>
        <option>Latest</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </div>
  );
};

export { Sort };
