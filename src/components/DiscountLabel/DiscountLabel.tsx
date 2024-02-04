import React, { FC } from "react";
import clsx from "clsx";
import classes from "./DiscountLabel.module.scss";

interface IDiscountLabelProps {
  number: number;
}

export const DiscountLabel: FC<IDiscountLabelProps> = ({ number }) => {
  return (
    <div className={clsx(classes.discountLabel, { [classes.show]: number })}>
      <span className={classes.discountLabelNumber}>{`-${number}%`}</span>
    </div>
  );
};
