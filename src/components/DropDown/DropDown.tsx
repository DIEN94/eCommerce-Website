import React, { FC, useState } from 'react';
import classes from "./DropDown.module.scss";

interface IOption {
  value: string;
  label: string;
}

interface IDropDown {
  options: IOption[];
  defaultValue?: string;
  onChange: (value: string) => void;
  variant: "dropDown"| "cardFilter"
}

export const DropDown: FC<IDropDown> = ({ options, defaultValue, onChange, variant }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <select className={classes[variant]} value={selectedValue} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};