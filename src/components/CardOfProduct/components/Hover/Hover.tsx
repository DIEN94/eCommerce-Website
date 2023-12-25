import React, { FC, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../../Button/MyButton";
import { Keys, hoverConfig } from "./config";
import { useAppSelector } from "hooks/redux";
import heart from 'assets/CardOfProduct/frames/Heart.webp'
import heartLiked from 'assets/CardOfProduct/frames/HeartLiked.webp'
import clsx from "clsx";
import classes from "./Hover.module.scss";

interface IHover {
  isHovered: boolean;
  addToCart: () => void;
  addToLikeList: () => void;
  deleteLike: () => void;
  id: number;
}
export const Hover: FC<IHover> = ({ isHovered, addToCart, addToLikeList, deleteLike, id }) => {
  const methods: Record<Keys, () => void> = {
    share: () => {
      console.log("done share");
    },
    compare: () => {
      console.log("done compare");
    },
  };

  const handleAddToCart = () => {
    addToCart();
  };

  const handleAddToLikeList = () => {
    addToLikeList();
  };

  const handleDeleteLike = () => {
    deleteLike();
  };

  const { cartList } = useAppSelector((state) => state.cart);

  let addedToCart = useMemo(() => {
    let addedToCart = cartList.find((obj) => {
      return obj.id === id;
    });
    return !!addedToCart;
  }, [cartList]);


  const { likeListId } = useAppSelector((state) => state.like);

  let addedToLikeList = useMemo(() => {
    let addedToLikeList = likeListId.find((obj) => {
      return obj.id === id;
    });
    return !!addedToLikeList;
  }, [likeListId]);

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
            {addedToLikeList? (
                <MyButton
                variant="no-fill"
                className={classes.buttonBoxElementsLiked}
                onClick={handleDeleteLike}
              >
                <img src={heartLiked} alt="heartLiked" />
                <span>Like</span>
              </MyButton>
            ) : (
              <MyButton
                variant="no-fill"
                className={classes.buttonBoxElements}
                onClick={handleAddToLikeList}
              >
                <img src={heart} alt="like" />
                <span>Like</span>
              </MyButton>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
