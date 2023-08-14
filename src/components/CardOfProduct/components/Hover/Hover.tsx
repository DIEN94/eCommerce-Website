import React, { FC, useState } from "react";
import { MyButton } from "../../../Button/MyButton";
import Heart from 'assets/CardOfProduct/frames/Heart.webp'
import Compare from 'assets/CardOfProduct/frames/Compare.webp'
import Share from 'assets/CardOfProduct/frames/Share.webp'
import classes from "./Hover.module.scss";

interface IHover {
    isHovered: boolean 
}
export const Hover: FC <IHover> = ({isHovered}) => {

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
    <div>
      <div
        className={`${classes.modalCard} ${isHovered ? classes.show : ""}`}
      ></div>
      <div className={`${classes.buttonCard} ${isHovered ? classes.show : ""}`}>
        <div className={classes.buttonContainer}>
          <MyButton
            variant="fill-white"
            className={classes.buttonAddToCart}
            onClick={addToCart}
          >
            Add to cart
          </MyButton>
          <div className={classes.buttonBox}>
            <MyButton
              variant="no-fill"
              className={classes.buttonBoxElements}
              onClick={executeShare}
            >
              <img src={Share} />
              <span>Share</span>
            </MyButton>
            <MyButton
              variant="no-fill"
              className={classes.buttonBoxElements}
              onClick={executeCompare}
            >
              <img src={Compare} />
              <span>Compare</span>
            </MyButton>
            <MyButton
              variant="no-fill"
              className={classes.buttonBoxElements}
              onClick={executeLike}
            >
              <img src={Heart} />
              <span>Like</span>
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
