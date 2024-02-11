import React, { FC } from "react";
import { CardOfProductCart, InformationBoard, PosterPage } from "components";
import { CartTotalsWindow } from "./components/CartTotalsWindow/CartTotalsWindow";
import { CartListHeader } from "./components/CartListHeader/CartListHeader";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartFetchingSuccess } from "store/reducers/cart";
import classes from "./Cart.module.scss";

export const Cart: FC = () => {
  const { cartList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const deleteCard = (id: string) => {
    const filteredCartList = cartList.filter((p) => p.id !== id);
    dispatch(cartFetchingSuccess(filteredCartList));
  };

  const handleChangeQuantity = (id: string, newQuantity: number) => {
    const updatedCartList = cartList.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    dispatch(cartFetchingSuccess(updatedCartList));
  };

  return (
    <div className={classes.cart}>
      <PosterPage namePage="Cart" />
      <div className={classes.cartContainer}>
        <div className={classes.cartListContainer}>
          <CartListHeader />
          <div className={classes.cardListBox}>
            {cartList.map(({ src, name, price, id, quantity }) => (
              <div className={classes.cardContainer} key={id}>
                <CardOfProductCart
                  key={id}
                  src={src}
                  name={name}
                  price={price}
                  id={id}
                  quantity={quantity}
                  deleteCard={deleteCard}
                  onChangeQuantity={handleChangeQuantity}
                />
              </div>
            ))}
          </div>
        </div>
        <CartTotalsWindow cartList={cartList} />
      </div>
      <InformationBoard />
    </div>
  );
};
