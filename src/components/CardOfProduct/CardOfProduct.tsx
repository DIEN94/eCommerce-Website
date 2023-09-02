import React, { FC } from 'react'
import { useState } from 'react';
import { Hover } from './components/Hover/Hover';
import clsx from 'clsx';
import classes from "./CardOfProduct.module.scss";

interface ICard {
  src: string 
  label?: string 
  ProductName: string 
  SortDescription: string
  FixPrice: string
  OriginalPrice?: string
}


export const CardOfProduct: FC <ICard> = ({src, label, ProductName, SortDescription, FixPrice, OriginalPrice}) => {

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
        <img className={classes.img} src={src}/>
        <img 
        className={clsx(classes.label, { [classes.show]: label })}
        src={label}
        />
      </div>
      <div className={classes.textCard}>
        <h1 className={classes.ProductName}>{ProductName}</h1>
        <p className={classes.SortDescription}>{SortDescription}</p>
        <div className={classes.priceBox}>
          <p className={classes.FixPrice}>{FixPrice}</p>
          <p className={classes.OriginalPrice}>{OriginalPrice}</p>
        </div>
      </div>
      <Hover isHovered={isHovered}/> 
    </div>
  )
}