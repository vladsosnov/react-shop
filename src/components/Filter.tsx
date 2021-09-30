import React, { FC } from "react";
import { Select } from "antd";
import { IFilter } from "models/Filter";

const { Option } = Select;

type Props = {
  size: IFilter;
  setFilterSize: (filter: IFilter) => void;
};

type FilterOption = {
  value: string;
  label: string;
};

const Filter: FC<Props> = ({ setFilterSize, size }) => {
  const options: FilterOption[] = [
    { value: "", label: "ALL" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XLL", label: "XLL" },
  ];

  return (
    <Select value={size} onChange={setFilterSize}>
      {options.map((option: FilterOption) => (
        <Option key={option.label} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export { Filter };
