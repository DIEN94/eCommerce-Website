import React, { FC } from 'react'
import { useState } from 'react';
import { Hover } from './components/Hover/Hover';
import clsx from 'clsx';
import classes from "./CardOfProduct.module.scss";

interface ICardProps {
  src: string
  label?: string
  ProductName: string
  SortDescription: string
  FixPrice: string
  OriginalPrice?: string
  addToCart: () => void;
}


export const CardOfProduct: FC<ICardProps> = ({ src, label, ProductName, SortDescription, FixPrice, OriginalPrice, addToCart }) => {

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
          <img className={classes.img} src={src} alt={`${ProductName}`} />
        </div>
        <img
          className={clsx(classes.label, { [classes.show]: label })}
          src={label}
          alt={`${label}`}
        />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.textCard}>
          <h1 className={classes.productName}>{ProductName}</h1>
          <p className={classes.sortDescription}>{SortDescription}</p>
          <div className={classes.priceBox}>
            <p className={classes.fixPrice}>{FixPrice}</p>
            <p className={classes.originalPrice}>{OriginalPrice}</p>
          </div>
        </div>
      </div>
      <Hover isHovered={isHovered} addToCart={addToCart}/>
    </div>
  )
}