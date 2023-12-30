import React, { FC } from "react";
import { useState } from "react";
import { Hover } from "./components/Hover/Hover";
import clsx from "clsx";
import classes from "./CardOfProduct.module.scss";

interface ICardProps {
  src: string;
  label?: string;
  productName: string;
  sortDescription: string;
  fixPrice: string;
  originalPrice?: string;
  id: number;
}

export const CardOfProduct: FC<ICardProps> = ({
  src,
  label,
  productName,
  sortDescription,
  fixPrice,
  originalPrice,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
      <Hover
        isHovered={isHovered}
        src={src}
        productName={productName}
        productPrice={fixPrice}
        id={id}
      />
    </div>
  );
};
