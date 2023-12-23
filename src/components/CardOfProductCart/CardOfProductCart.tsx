import React, { FC, useMemo, useState } from "react";
import { MyButton, MyInput } from "components";
import imgCart from "assets/CardOfProductCart/imgCart.webp";
import classes from "./CardOfProductCart.module.scss";

interface ICardOfProductCartProps {
  src: string;
  ProductName: string;
  ProductPrice: string;
  id: number;
  quantity: number;
  deleteCard: () => void;
  onChangeQuantity: (newQuantity: number) => void;
}

export const CardOfProductCart: FC<ICardOfProductCartProps> = ({
  src,
  ProductName,
  ProductPrice,
  id,
  quantity,
  deleteCard,
  onChangeQuantity,
}) => {

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    onChangeQuantity(newQuantity);
  };

  const priceString = ProductPrice.replace("Rp ", "");
  const priceNumber = parseFloat(priceString.replace(/\./g, ""));
  const newTotalSum = priceNumber * quantity;
  const calculatedPrice = newTotalSum
    ? newTotalSum.toLocaleString("en-US")
    : "-";

  return (
    <div className={classes.myCard}>
      <div className={classes.imgContainer}>
        <img src={src} alt={`${ProductName}`} />
      </div>
      <div className={classes.cardContainer}>
        <h1>{ProductName}</h1>
        <p>{ProductPrice}</p>
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
