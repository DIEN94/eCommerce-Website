import React, { FC } from 'react'
import classes from "./CardOfProduct.module.scss";
import { useState } from 'react';
import { MyButton } from '../button/MyButton';
import Vector1 from './frames/Vector1.png';
import Vector2 from './frames/Vector2.png';
import Heart from './frames/Heart.png';

interface ICard {
  src?: string 
  label?: string 
  ProductName: string 
  SortDescription: string
  FixPrice: string
  OriginalPrice: string
}


export const CardOfProduct: FC <ICard> = ({src, label, ProductName, SortDescription, FixPrice, OriginalPrice}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const addToCart = () => {
    console.log("AddToCart");
    
  };

  const executeShare = () => {
    console.log("done share");
    
  };
  
  const executeCompare = () => {
    console.log("done compare");
    
  };

  const executeLike = () => {
    console.log("done like");
    
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
        className={`${classes.label} ${label ? classes.show : ''}`} 
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
      <div 
      className={`${classes.modalCard} ${isHovered ? classes.show : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      >
      </div>
      <div className={`${classes.buttonCard} ${isHovered ? classes.show : ''}`}>
        <div className={classes.buttonContainer}>
            <MyButton className={classes.buttonAddToCart} onClick={addToCart}>Add to cart</MyButton>
            <div className={classes.buttonBox}>
            <MyButton className={classes.buttonBoxElements} onClick={executeShare}>
              <img src={Vector1}/>
              <span>Share</span>
            </MyButton>
            <MyButton className={classes.buttonBoxElements} onClick={executeCompare}>
              <img src={Vector2}/>
              <span>Compare</span>
            </MyButton>
            <MyButton className={classes.buttonBoxElements} onClick={executeLike}>
              <img src={Heart}/>
              <span>Like</span>
            </MyButton>
            </div>
          </div>
      </div>

    </div>
  )
}