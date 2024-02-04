import React, { FC } from "react";
import { MyButton, MyInput } from "components";
import imgCart from "assets/CardOfProductCart/imgCart.webp";
import classes from "./CardOfProductCart.module.scss";

interface ICardOfProductCartProps {
  src: string[];
  name: string;
  price: number;
  id: string;
  quantity: number;
  deleteCard: () => void;
  onChangeQuantity: (newQuantity: number) => void;
}

export const CardOfProductCart: FC<ICardOfProductCartProps> = ({
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

  const newTotalSum = price * quantity;
  const calculatedPrice = newTotalSum ? newTotalSum : "-";

  return (
    <div className={classes.myCard}>
      <div className={classes.imgContainer}>
        <img src={src[0]} alt={`${name}`} />
      </div>
      <div className={classes.cardContainer}>
        <h1>{name}</h1>
        <p>{`${price}.00`}</p>
        <MyInput
          className={classes.input}
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <p>{`${calculatedPrice}.00`}</p>
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
