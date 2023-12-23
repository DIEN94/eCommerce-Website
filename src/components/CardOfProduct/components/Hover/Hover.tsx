import React, { FC, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../../Button/MyButton";
import { Keys, hoverConfig } from "./config";
import { useAppSelector } from "hooks/redux";
import clsx from "clsx";
import classes from "./Hover.module.scss";

interface IHover {
  isHovered: boolean;
  addToCart: () => void;
  id: number;
}
export const Hover: FC<IHover> = ({ isHovered, addToCart, id }) => {
  const methods: Record<Keys, () => void> = {
    share: () => {
      console.log("done share");
    },
    compare: () => {
      console.log("done compare");
    },
    like: () => {
      console.log("done like");
    },
  };

  const handleAddToCart = () => {
    addToCart();
  };

  const { cartList } = useAppSelector((state) => state.cart);

  let addedToCart = useMemo(() => {
    let addedToCart = cartList.find((obj) => {
      return obj.id === id;
    });
    return !!addedToCart;
  }, [cartList]);

  return (
    <div>
      <div
        className={clsx(classes.modalCard, { [classes.show]: isHovered })}
      ></div>
      <div className={clsx(classes.buttonCard, { [classes.show]: isHovered })}>
        <div className={classes.buttonContainer}>
          <Link to={"/shop/id"}>
            <MyButton variant="fill-white" className={classes.buttonBig}>
              Details
            </MyButton>
          </Link>
          {addedToCart ? (
            <Link to={"/cart"}>
              <MyButton variant="fill-white" className={classes.buttonBig}>
                Go to cart
              </MyButton>
            </Link>
          ) : (
            <MyButton
              variant="fill-white"
              className={classes.buttonBig}
              onClick={handleAddToCart}
            >
              Add to cart
            </MyButton>
          )}
          <div className={classes.buttonBox}>
            {hoverConfig.map(({ key, src, text }) => {
              return (
                <MyButton
                  key={key}
                  variant="no-fill"
                  className={classes.buttonBoxElements}
                  onClick={methods[key]}
                >
                  <img src={src} alt={key} />
                  <span>{text}</span>
                </MyButton>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
