import React from "react";
import classes from "./CartListHeader.module.scss";

export const CartListHeader = () => {
  return (
    <div className={classes.cartListHeader}>
      <p>Product</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
    </div>
  );
};
