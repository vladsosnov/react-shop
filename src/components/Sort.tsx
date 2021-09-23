import React, { FC } from "react";
import styles from "css/components/Sort.module.css";
import { ISort } from "models/Sort";

type Props = {
  sort: ISort;
  setSortType: (sort: ISort) => void;
};

const Sort: FC<Props> = ({ setSortType, sort }: Props) => {
  return (
    <div className={styles.sortStyle}>
      Order&nbsp;
      <select
        value={sort}
        onChange={(e) => setSortType(e.target.value as ISort)}
      >
        <option>Latest</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </div>
  );
};

export { Sort };
