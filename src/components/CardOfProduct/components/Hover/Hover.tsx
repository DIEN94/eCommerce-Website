import React, { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { MyButton } from "../../../Button/MyButton";
import { Keys, hoverConfig } from "./config";
import clsx from 'clsx';
import classes from "./Hover.module.scss";

interface IHover {
  isHovered: boolean
  addToCart: () => void;
}
export const Hover: FC<IHover> = ({ isHovered, addToCart }) => {

const methods: Record<Keys, () => void> = {
share: () => {
  console.log("done share");
},
compare: () => {
  console.log("done compare");
}, 
like: () => {
  console.log("done like");
}, 
}

  return (
    <div>
      <div
        className={clsx(classes.modalCard, { [classes.show]: isHovered })}
      ></div>
      <div className={clsx(classes.buttonCard, { [classes.show]: isHovered })}>
        <div className={classes.buttonContainer}>
          <Link to={"/shop/id"}>
          <MyButton
            variant="fill-white"
            className={classes.buttonBig}
            >
              Details
          </MyButton>
          </Link>
          <MyButton
            variant="fill-white"
            className={classes.buttonBig}
            onClick={addToCart}
          >
            Add to cart
          </MyButton>
          <div className={classes.buttonBox}>
            {hoverConfig.map(({ key, src, text }) => {
              return (
                <MyButton
                key={key}
                variant="no-fill"
                className={classes.buttonBoxElements}
                onClick={methods[key]}
              >
                <img src={src} alt={key} />
                <span>{text}</span>
              </MyButton>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
