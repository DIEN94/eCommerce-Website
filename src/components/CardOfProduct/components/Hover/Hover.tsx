import React, { FC, useState } from "react";
import { MyButton } from "../../../Button/MyButton";
import { hoverConfig } from "./config";
import clsx from 'clsx';
import classes from "./Hover.module.scss";

interface IHover {
  isHovered: boolean
}
export const Hover: FC<IHover> = ({ isHovered }) => {

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
        className={clsx(classes.modalCard, { [classes.show]: isHovered })}
      ></div>
      <div className={clsx(classes.buttonCard, { [classes.show]: isHovered })}>
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
              <img src={hoverConfig.Share} alt="Share" />
              <span>Share</span>
            </MyButton>
            <MyButton
              variant="no-fill"
              className={classes.buttonBoxElements}
              onClick={executeCompare}
            >
              <img src={hoverConfig.Compare} alt="Compare" />
              <span>Compare</span>
            </MyButton>
            <MyButton
              variant="no-fill"
              className={classes.buttonBoxElements}
              onClick={executeLike}
            >
              <img src={hoverConfig.Heart} alt="Heart" />
              <span>Like</span>
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
