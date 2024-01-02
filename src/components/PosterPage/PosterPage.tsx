import React from "react";
import { imgPosterPageConfig } from "./config";
import classes from "./PosterPage.module.scss";

interface IPosterPageProps {
  namePage: string;
}

export const PosterPage: React.FC<IPosterPageProps> = ({ namePage }) => {
  return (
    <div className={classes.posterPageContainer}>
      <img src={imgPosterPageConfig.shopPoster} alt="shopPoster" />
      <div className={classes.textContainer}>
        <img src={imgPosterPageConfig.logo} alt="logo" />
        <p className={classes.firstLevelText}>{namePage}</p>
        <div className={classes.secondLevelText}>
          <p className={classes.textHome}>Home</p>
          <div className={classes.imgArrow}>
            <img src={imgPosterPageConfig.arrow} alt="arrow" />
          </div>
          <p className={classes.textShop}>{namePage}</p>
        </div>
      </div>
    </div>
  );
};
