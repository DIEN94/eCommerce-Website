import React, { FC, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "./../Button/MyButton";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import clsx from "clsx";
import classes from "./CardOfProductWide.module.scss";

interface ICardWide {
  src: string;
  label?: string;
  productName: string;
  sortDescription: string;
  fixPrice: string;
  originalPrice?: string;
  id: number;
}

export const CardOfProductWide: FC<ICardWide> = ({
  src,
  label,
  productName,
  sortDescription,
  fixPrice,
  originalPrice,
  id,
}) => {
  const { cartList } = useAppSelector((state) => state.cart);

  let addedToCart = useMemo(() => {
    let addedToCart = cartList.find((obj) => {
      return obj.id === id;
    });
    return !!addedToCart;
  }, [cartList]);

  const dispatch = useAppDispatch();

  const addToCart = (
    src: string,
    productName: string,
    productPrice: string,
    id: number
  ) => {
    const newItem = {
      src: src,
      productName: productName,
      productPrice: productPrice,
      id: id,
      quantity: 1,
    };

    try {
      const cartListToken = localStorage.getItem("CartArray");
      if (cartListToken) {
        const storedCartArray = JSON.parse(cartListToken);
        storedCartArray.push(newItem);
        dispatch(cartFetchingSuccess(storedCartArray));
      } else {
        dispatch(cartFetchingError("Error"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.myCard}>
      <div className={classes.leftContainer}>
        <div className={classes.imgBox}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={src} alt={`${productName}`} />
          </div>
          <img
            className={clsx(classes.label, { [classes.show]: label })}
            src={label}
            alt={`${label}`}
          />
        </div>
        <div className={classes.textContainer}>
          <div className={classes.textCard}>
            <h1 className={classes.productName}>{productName}</h1>
            <p className={classes.sortDescription}>{sortDescription}</p>
            <div className={classes.priceBox}>
              <p className={classes.fixPrice}>{fixPrice}</p>
              <p className={classes.originalPrice}>{originalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Link to={"/shop/id"}>
          <MyButton variant="fill-white" className={classes.button}>
            Details
          </MyButton>
        </Link>
        {addedToCart ? (
          <Link to={"/cart"}>
            <MyButton variant="fill-white" className={classes.button}>
              Go to cart
            </MyButton>
          </Link>
        ) : (
          <MyButton
            variant="fill-white"
            className={classes.button}
            onClick={() => addToCart(src, productName, fixPrice, id)}
          >
            Add to cart
          </MyButton>
        )}
      </div>
    </div>
  );
};
