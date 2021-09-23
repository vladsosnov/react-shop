import React, { FC } from "react";
import styles from "css/components/Filter.module.css";
import { IFilter } from "models/Filter";

type Props = {
  size: IFilter;
  setFilterSize: (filter: IFilter) => void;
};

const Filter: FC<Props> = ({ setFilterSize, size }: Props) => {
  return (
    <div className={styles.filterStyle}>
      <div>
        Filter&nbsp;
        <select
          value={size}
          onChange={(e) => setFilterSize(e.target.value as IFilter)}
        >
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
