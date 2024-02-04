import React from "react";
import { MyButton } from "components";
import { useAppSelector } from "hooks/redux";
import { currency } from "consts/consts";
import classes from "./CheckoutWindow.module.scss";

export const CheckoutWindow = () => {
  const { cartList } = useAppSelector((state) => state.cart);
  const totalSumLS = localStorage.getItem("totalSum");
  const totalSum = totalSumLS ? parseFloat(totalSumLS) : 0;

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
        {cartList.map(({ name, price, id, quantity }) => (
          <div className={classes.cardContainer} key={id}>
            <div className={classes.nameContainer}>
              <p>{name}</p>
              <p>x</p>
              <p>{quantity}</p>
            </div>
            <p>{`${price}.00`}</p>
          </div>
        ))}
        <div className={classes.totalContainer}>
          <p className={classes.totalText}>Total</p>
          <p className={classes.totalSumText}>{`${totalSum}.00 ${currency}`}</p>
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
