import React, { FC, useState } from 'react'
import { MyButton } from './../Button/MyButton';
import clsx from 'clsx';
import classes from "./CardOfProductWide.module.scss";

interface ICardWide {
    src: string
    label?: string
    ProductName: string
    SortDescription: string
    FixPrice: string
    OriginalPrice?: string
  }

export const CardOfProductWide: FC<ICardWide> = ({ src, label, ProductName, SortDescription, FixPrice, OriginalPrice }) => {

    const addToCart = () => {
        console.log("AddToCart");
      };

  return (
    <div className={classes.myCard}>
    <div className={classes.leftContainer}>
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
        <h1 className={classes.ProductName}>{ProductName}</h1>
        <p className={classes.SortDescription}>{SortDescription}</p>
        <div className={classes.priceBox}>
          <p className={classes.FixPrice}>{FixPrice}</p>
          <p className={classes.OriginalPrice}>{OriginalPrice}</p>
        </div>
      </div>
    </div>
    </div>
    <MyButton
        variant="fill-white"
        className={classes.buttonAddToCart}
        onClick={addToCart}
        >
        Add to cart
    </MyButton>
  </div>
  )
}
