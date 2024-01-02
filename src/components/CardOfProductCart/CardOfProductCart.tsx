import React, { FC, useMemo, useState } from "react";
import { MyButton, MyInput } from "components";
import imgCart from "assets/CardOfProductCart/imgCart.webp";
import classes from "./CardOfProductCart.module.scss";

interface ICardOfProductCartProps {
  src: string;
  productName: string;
  productPrice: string;
  id: number;
  quantity: number;
  deleteCard: () => void;
  onChangeQuantity: (newQuantity: number) => void;
}

export const CardOfProductCart: FC<ICardOfProductCartProps> = ({
  src,
  productName,
  productPrice,
  id,
  quantity,
  deleteCard,
  onChangeQuantity,
}) => {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    onChangeQuantity(newQuantity);
  };

  const priceString = productPrice.replace("Rp ", "");
  const priceNumber = parseFloat(priceString.replace(/\./g, ""));
  const newTotalSum = priceNumber * quantity;
  const calculatedPrice = newTotalSum
    ? newTotalSum.toLocaleString("en-US")
    : "-";

  return (
    <div className={classes.myCard}>
      <div className={classes.imgContainer}>
        <img src={src} alt={`${productName}`} />
      </div>
      <div className={classes.cardContainer}>
        <h1>{productName}</h1>
        <p>{productPrice}</p>
        <MyInput
          className={classes.input}
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <p>{calculatedPrice}</p>
      </div>
      <div className={classes.buttonContainer}>
        <MyButton
          variant="no-fill"
          className={classes.button}
          onClick={deleteCard}
        >
          <img src={imgCart} alt="iconCart" />
        </MyButton>
      </div>
    </div>
  );
};
