import React, { FC, useMemo, useState } from "react";
import { MyButton, MyInput } from "components";
import { useAppSelector } from "hooks/redux";
import deleteModalCart from "assets/header/ModalWindowCart/CardOfProductModalCart/deleteModalCart.webp";
import classes from "./CardOfProductModalCart.module.scss";

interface ICardOfProductModalCartProps {
  src: string;
  ProductName: string;
  ProductPrice: string;
  id: number;
  deleteCard: () => void;
  onChangeQuantity: (newQuantity: number) => void;
}

export const CardOfProductModalCart: FC<ICardOfProductModalCartProps> = ({
  src,
  ProductName,
  ProductPrice,
  id,
  deleteCard,
  onChangeQuantity,
}) => {
  const { cartList } = useAppSelector((state) => state.cart);

  const initialQuantity = (id: number) => {
    let initialQuantityObj = cartList.find((obj) => {
      return obj.id === id;
    });
    return initialQuantityObj?.quantity ? initialQuantityObj?.quantity : 1;
  };

  const [quantity, setQuantity] = useState(initialQuantity(id));

  useMemo(() => {
    let initialQuantityObj = cartList.find((obj) => {
      return obj.id === id;
    });
    return initialQuantityObj?.quantity
      ? setQuantity(initialQuantityObj?.quantity)
      : 1;
  }, [cartList]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    onChangeQuantity(newQuantity);
  };

  const deleteCardFunc = (event: any) => {
    deleteCard();
    event.stopPropagation();
  };

  return (
    <div className={classes.myCard}>
      <div className={classes.imgContainer}>
        <img src={src} alt={`${ProductName}`} />
      </div>
      <div className={classes.cardContainer}>
        <h1>{ProductName}</h1>
        <div className={classes.priceContainer}>
          <MyInput
            className={classes.input}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p>x</p>
          <p>{ProductPrice}</p>
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
