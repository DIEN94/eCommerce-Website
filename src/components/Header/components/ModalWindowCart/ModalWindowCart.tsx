import React, { FC } from "react";
import { IModal, MyModal } from "components/Modal/MyModal";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { MyButton } from "components";
import { Link } from "react-router-dom";
import { cartFetchingSuccess } from "store/reducers/cart";
import { CardOfProductModalCart } from "./components/CardOfProductModalCart/CardOfProductModalCart";
import { CartTotalsWindowModal } from "./components/CartTotalWindowModal/CartTotalWindowModal";
import exitModalCart from "assets/header/ModalWindowCart/exitModalCart.webp";
import classes from "./ModalWindowCart.module.scss";

export interface IModalWindowCartProps
  extends Pick<IModal, "onClose" | "isOpen"> {}

export const ModalWindowCart: FC<IModalWindowCartProps> = ({
  isOpen,
  onClose,
}) => {
  const { cartList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const deleteCard = (id: number) => {
    const filteredCartList = cartList.filter((p) => p.id !== id);
    dispatch(cartFetchingSuccess(filteredCartList));
  };

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    const updatedCartList = cartList.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    dispatch(cartFetchingSuccess(updatedCartList));
  };

  const closeMenu = () => {
    onClose();
  };

  return (
    <MyModal
      isOpen={isOpen}
      onClose={closeMenu}
      closeDelay={1000}
      className={classes.modalWindowCart}
      animateClasses={{ show: classes.show, hide: classes.hide }}
    >
      <div className={classes.titleContainer}>
        <p className={classes.titleText}>Shopping Cart</p>
        <MyButton
          className={classes.buttonExit}
          variant="fill-white"
          type="button"
          onClick={closeMenu}
        >
          <img src={exitModalCart} alt="exitModalCartImg" />
        </MyButton>
      </div>
      <div className={classes.cartContainer}>
        {cartList.map(({ src, ProductName, ProductPrice, id, quantity }) => (
          <div className={classes.cardContainer} key={id}>
            <CardOfProductModalCart
              key={id}
              src={src}
              ProductName={ProductName}
              ProductPrice={ProductPrice}
              id={id}
              quantity={quantity}
              deleteCard={() => deleteCard(id)}
              onChangeQuantity={(newQuantity) => {
                handleChangeQuantity(id, newQuantity);
              }}
            />
          </div>
        ))}
      </div>
      <CartTotalsWindowModal cartList={cartList} />
      <div className={classes.buttonContainer}>
        <Link to={"/cart"}>
          <MyButton
            className={classes.buttonCart}
            variant="fill-white"
            onClick={closeMenu}
          >
            Cart
          </MyButton>
        </Link>
        <Link to={"/checkout"}>
          <MyButton
            className={classes.buttonCheckout}
            variant="fill-white"
            onClick={closeMenu}
          >
            Checkout
          </MyButton>
        </Link>
      </div>
    </MyModal>
  );
};
