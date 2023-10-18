import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
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
    addToCart: () => void;
  }

export const CardOfProductWide: FC<ICardWide> = ({ src, label, ProductName, SortDescription, FixPrice, OriginalPrice, addToCart }) => {

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
        <h1 className={classes.productName}>{ProductName}</h1>
        <p className={classes.sortDescription}>{SortDescription}</p>
        <div className={classes.priceBox}>
          <p className={classes.fixPrice}>{FixPrice}</p>
          <p className={classes.originalPrice}>{OriginalPrice}</p>
        </div>
      </div>
    </div>
    </div>
    <div className={classes.buttonContainer}>
      <Link to={"/shop/id"}>
        <MyButton
          variant="fill-white"
          className={classes.button}
          >
            Details
        </MyButton>
      </Link>
      <MyButton
          variant="fill-white"
          className={classes.button}
          onClick={addToCart}
          >
          Add to cart
      </MyButton>
    </div>
  </div>
  )
}
