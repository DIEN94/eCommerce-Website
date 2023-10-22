import React, { FC, useEffect, useRef, useState } from 'react';
import arrowDown from "assets/DropDown/arrowDown.webp";
import arrowUp from "assets/DropDown/arrowUp.webp";
import classes from "./DropDown.module.scss";
import { clsx } from 'clsx';

interface IOption {
  value: string;
  label: string;
}

interface IDropDown {
  className?: string;
  options: IOption[];
  defaultValue?: string;
  arrow: boolean;
  onChange: (value: string) => void;
}

export const DropDown: FC<IDropDown> = ({className, options, defaultValue, arrow, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);    
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectChange = (option: IOption) => {
    setSelectedValue(option.value);
    onChange(option.value);
    setIsOpen(false)
  };

return (
  <div className={clsx(classes.dropDown, {[`${className}`]: className })} ref={dropDownRef}>
    <div className={classes.dropDownButton} onClick={toggleDropdown}>
      <p>{selectedValue}</p>
      <div className={clsx(classes.dropDownArrow, { [classes.show]: arrow })}>
        <img src={isOpen?arrowUp:arrowDown} alt="arrow"/>
      </div>
    </div>
    {isOpen && (
    <div className={classes.options}>
        {options.map((option) => (
          <p key={option.value} onClick={() => handleSelectChange(option)}>
            {option.label}
          </p>
        ))}
    </div>
    )}
  </div>
);
}
