import React, { FC, useMemo, useState } from "react";
import { MyButton, MyInput } from "components";
import deleteModalCart from "assets/header/ModalWindowCart/CardOfProductModalCart/deleteModalCart.webp";
import classes from "./CardOfProductModalCart.module.scss";

interface ICardOfProductModalCartProps {
  src: string;
  productName: string;
  productPrice: string;
  id: number;
  quantity: number;
  deleteCard: () => void;
  onChangeQuantity: (newQuantity: number) => void;
}

export const CardOfProductModalCart: FC<ICardOfProductModalCartProps> = ({
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

  const deleteCardFunc = (event: any) => {
    deleteCard();
    event.stopPropagation();
  };

  return (
    <div className={classes.myCard}>
      <div className={classes.imgContainer}>
        <img src={src} alt={`${productName}`} />
      </div>
      <div className={classes.cardContainer}>
        <h1>{productName}</h1>
        <div className={classes.priceContainer}>
          <MyInput
            className={classes.input}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p>x</p>
          <p>{productPrice}</p>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <MyButton
          variant="no-fill"
          className={classes.button}
          onClick={deleteCardFunc}
        >
          <img src={deleteModalCart} alt="deleteModalCartImg" />
        </MyButton>
      </div>
    </div>
  );
};
