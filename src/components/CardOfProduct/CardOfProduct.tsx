import React, { FC } from "react";
import { useState } from "react";
import { Hover } from "./components/Hover/Hover";
import { DiscountLabel } from "components/DiscountLabel/DiscountLabel";
import { currency } from "consts/consts";
import clsx from "clsx";
import classes from "./CardOfProduct.module.scss";

interface ICardProps {
  src: string[];
  discount?: number;
  name: string;
  description: string;
  price: number;
  id: string;
}

export const CardOfProduct: FC<ICardProps> = ({
  src,
  discount,
  name,
  description,
  price,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  let fixPrice = discount ? price - discount : price;
  let originalPrice = discount ? price : null;
  let discountPercent = discount ? Math.floor(discount / (price / 100)) : 0;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={classes.myCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.imgBox}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={src[0]} alt={`${name}`} />
        </div>
        <DiscountLabel number={discountPercent} />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.textCard}>
          <h1 className={classes.productName}>{name}</h1>
          <p className={classes.description}>{description}</p>
          <div className={classes.priceBox}>
            <p className={classes.fixPrice}>{`${fixPrice}.00 ${currency}`}</p>
            <p
              className={clsx(classes.originalPrice, {
                [classes.show]: discount,
              })}
            >{`${originalPrice}.00 ${currency}`}</p>
          </div>
        </div>
      </div>
      <Hover
        isHovered={isHovered}
        src={src}
        name={name}
        price={fixPrice}
        id={id}
      />
    </div>
  );
};
