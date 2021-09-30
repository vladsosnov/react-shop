import React, { FC } from "react";
import { Select } from "antd";
import { ISort } from "models/Sort";

const { Option } = Select;

type Props = {
  sort: ISort;
  setSortType: (sort: ISort) => void;
};

type SortOption = {
  value: string;
  label: string;
};

const Sort: FC<Props> = ({ setSortType, sort }) => {
  const options: SortOption[] = [
    { value: "latest", label: "Latest" },
    { value: "lowest", label: "Lowest" },
    { value: "highest", label: "Highest" },
  ];

  return (
    <Select value={sort} onChange={setSortType}>
      {options.map((option: SortOption) => (
        <Option key={option.label} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export { Sort };
