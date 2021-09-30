import React, { FC } from "react";
import { Select } from "antd";
import { ISort } from "models/Sort";

const { Option } = Select;

type Props = {
  sort: ISort;
  setSortType: (sort: ISort) => void;
};

const Sort: FC<Props> = ({ setSortType, sort }) => {
  return (
    <Select value={sort} onChange={setSortType}>
      <Option value="latest">Latest</Option>
      <Option value="lowest">Lowest</Option>
      <Option value="highest">Highest</Option>
    </Select>
  );
};

export { Sort };
