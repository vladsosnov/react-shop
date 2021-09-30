import React, { FC } from "react";
import { Select } from "antd";
import { IFilter } from "models/Filter";

const { Option } = Select;

type Props = {
  size: IFilter;
  setFilterSize: (filter: IFilter) => void;
};

const Filter: FC<Props> = ({ setFilterSize, size }) => {
  return (
    <Select value={size} onChange={setFilterSize}>
      <Option value="">ALL</Option>
      <Option value="XS">XS</Option>
      <Option value="S">S</Option>
      <Option value="M">M</Option>
      <Option value="L">L</Option>
      <Option value="XL">XL</Option>
      <Option value="XXL">XXL</Option>
    </Select>
  );
};

export { Filter };
