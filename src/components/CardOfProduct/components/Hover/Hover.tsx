import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../../Button/MyButton";
import { Keys, hoverConfig } from "./config";
import { useAddedToCart } from "hooks/useAddedToCart";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import { likeFetchingError, likeFetchingSuccess } from "store/reducers/like";
import heart from "assets/CardOfProduct/frames/Heart.webp";
import heartLiked from "assets/CardOfProduct/frames/HeartLiked.webp";
import clsx from "clsx";
import classes from "./Hover.module.scss";

interface IHover {
  isHovered: boolean;
  src: string[];
  name: string;
  price: number;
  id: string;
}

export const Hover: FC<IHover> = ({ isHovered, src, name, price, id }) => {
  const dispatch = useAppDispatch();
  const methods: Record<Keys, () => void> = {
    share: () => {
      navigator.clipboard
        .writeText(`http://localhost:3000/shop/${id}`)
        .then(() => alert("Product link copied"))
        .catch((err) => console.error(err));
    },
    compare: () => {
      console.log("done compare");
    },
  };

  const addToLikeList = (id: string) => {
    const newLikeItem = {
      id: id,
    };

    try {
      const likeListToken = localStorage.getItem("LikeArray");
      if (likeListToken) {
        const storedLikeArray = JSON.parse(likeListToken);
        storedLikeArray.push(newLikeItem);
        dispatch(likeFetchingSuccess(storedLikeArray));
      } else {
        dispatch(likeFetchingError("Error"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLike = (id: string) => {
    interface LikeListItem {
      id: string;
    }
    const likeListToken = localStorage.getItem("LikeArray");
    if (likeListToken) {
      const storedLikeArray = JSON.parse(likeListToken);
      const newLikeArray = storedLikeArray.filter(
        (item: LikeListItem) => item.id !== id
      );
      dispatch(likeFetchingSuccess(newLikeArray));
    }
  };

  const { likeListId } = useAppSelector((state) => state.like);

  let addedToLikeList = useMemo(() => {
    let addedToLikeList = likeListId.find((obj) => {
      return obj.id === id;
    });
    return !!addedToLikeList;
  }, [likeListId]);

  const addToCart = (
    src: string[],
    name: string,
    price: number,
    id: string
  ) => {
    const newItem = {
      src: src,
      name: name,
      price: price,
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

  let addedToCart: boolean = useAddedToCart(id);

  return (
    <div>
      <div
        className={clsx(classes.modalCard, { [classes.show]: isHovered })}
      ></div>
      <div className={clsx(classes.buttonCard, { [classes.show]: isHovered })}>
        <div className={classes.buttonContainer}>
          <Link to={`/shop/${id}`}>
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
              onClick={() => addToCart(src, name, price, id)}
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
            {addedToLikeList ? (
              <MyButton
                variant="no-fill"
                className={classes.buttonBoxElementsLiked}
                onClick={() => deleteLike(id)}
              >
                <img src={heartLiked} alt="heartLiked" />
                <span>Like</span>
              </MyButton>
            ) : (
              <MyButton
                variant="no-fill"
                className={classes.buttonBoxElements}
                onClick={() => addToLikeList(id)}
              >
                <img src={heart} alt="like" />
                <span>Like</span>
              </MyButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
