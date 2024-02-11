import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "./../Button/MyButton";
import { useAddedToCart } from "hooks/useAddedToCart";
import { useAppDispatch } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import { DiscountLabel } from "components/DiscountLabel/DiscountLabel";
import { currency } from "consts/consts";
import defaultIcon from "assets/CardOfProductWide/default-image-icon.webp";
import clsx from "clsx";
import classes from "./CardOfProductWide.module.scss";

interface ICardWide {
  src: string[];
  discount?: number;
  name: string;
  description: string;
  price: number;
  id: string;
}

export const CardOfProductWide: FC<ICardWide> = ({
  src,
  discount,
  name,
  description,
  price,
  id,
}) => {
  let fixPrice = discount ? price - discount : price;
  let originalPrice = discount ? price : null;
  let discountPercent = discount ? Math.floor(discount / (price / 100)) : 0;

  const dispatch = useAppDispatch();

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
    <div className={classes.myCard}>
      <div className={classes.leftContainer}>
        <div className={classes.imgBox}>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src={src[0] ? src[0] : defaultIcon}
              alt={`${name}`}
            />
          </div>
          {discount ? <DiscountLabel number={discountPercent} /> : null}
        </div>
        <div className={classes.textContainer}>
          <div className={classes.textCard}>
            <h1 className={classes.productName}>{name}</h1>
            <p className={classes.sortDescription}>{description}</p>
            <div className={classes.priceBox}>
              <p className={classes.fixPrice}>{`${fixPrice.toFixed(
                2
              )} ${currency}`}</p>
              <p
                className={clsx(classes.originalPrice, {
                  [classes.show]: discount,
                })}
              >{`${
                originalPrice ? originalPrice.toFixed(2) : originalPrice
              } ${currency}`}</p>
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
            onClick={() => addToCart(src, name, fixPrice, id)}
          >
            Add to cart
          </MyButton>
        )}
      </div>
    </div>
  );
};
