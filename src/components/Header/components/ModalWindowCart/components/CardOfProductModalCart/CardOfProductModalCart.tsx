import React, { FC, useMemo, useState } from "react";
import { MyButton, MyInput } from "components";
import deleteModalCart from "assets/header/ModalWindowCart/CardOfProductModalCart/deleteModalCart.webp";
import classes from "./CardOfProductModalCart.module.scss";

interface ICardOfProductModalCartProps {
  src: string[];
  name: string;
  price: number;
  id: string;
  quantity: number;
  deleteCard: () => void;
  onChangeQuantity: (newQuantity: number) => void;
}

export const CardOfProductModalCart: FC<ICardOfProductModalCartProps> = ({
  src,
  name,
  price,
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
        <img src={src[0]} alt={`${name}`} />
      </div>
      <div className={classes.cardContainer}>
        <h1>{name}</h1>
        <div className={classes.priceContainer}>
          <MyInput
            className={classes.input}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p>x</p>
          <p>{`${price}.00`}</p>
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
