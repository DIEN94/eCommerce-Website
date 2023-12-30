import React from "react";
import { MyButton, MyInput, PosterPage } from "components";
import { useAppSelector } from "hooks/redux";
import classes from "./CheckoutWindow.module.scss";

export const CheckoutWindow = (isValid: any) => {
  const { cartList } = useAppSelector((state) => state.cart);
  const totalSumLS = localStorage.getItem("totalSum");
  const totalSum = totalSumLS
    ? parseFloat(totalSumLS).toLocaleString("en-US")
    : 0;

  const placeOrder = () => {
    alert("Order is accepted!");
  };

  return (
    <div className={classes.checkoutWindowContainer}>
      <div className={classes.headerContainer}>
        <p>Product</p>
        <p>Subtotal</p>
      </div>
      <div className={classes.checkoutListContainer}>
        {cartList.map(({ productName, productPrice, id, quantity }) => (
          <div className={classes.cardContainer} key={id}>
            <div className={classes.nameContainer}>
              <p>{productName}</p>
              <p>x</p>
              <p>{quantity}</p>
            </div>
            <p>{productPrice}</p>
          </div>
        ))}
        <div className={classes.totalContainer}>
          <p className={classes.totalText}>Total</p>
          <p className={classes.totalSumText}>Rp {totalSum}.00</p>
        </div>
      </div>
      <p className={classes.infoContainer}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>
      <MyButton
        variant="fill-white"
        className={classes.buttonCheckout}
        onClick={placeOrder}
      >
        Place order
      </MyButton>
    </div>
  );
};
