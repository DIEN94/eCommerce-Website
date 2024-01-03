import React from "react";
import arrow from "assets/Product/arrow.webp";
import classes from "./HeaderPage.module.scss";

interface IHeaderPageProps {
  productName: string;
}

export const HeaderPage: React.FC<IHeaderPageProps> = ({ productName }) => {
  return (
    <div className={classes.headerPage}>
      <div className={classes.staticContainer}>
        <p className={classes.textHeader}>Home</p>
        <div className={classes.imgArrow}>
          <img src={arrow} alt="arrow" />
        </div>
        <p className={classes.textHeader}>Shop</p>
        <div className={classes.imgArrow}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <p className={classes.textProductName}>{productName}</p>
    </div>
  );
};
