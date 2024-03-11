import React from "react";
import { Link } from "react-router-dom";
import { MyButton, SliderSlick } from "components";
import { sliderImages } from "./config";
import classes from "./Carousel.module.scss";

export const Carousel = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <p className={classes.firstLevelText}>
          50+ Beautiful rooms
          <br />
          inspiration
        </p>
        <p className={classes.secondLevelText}>
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <Link to={"/shop"} style={{ textDecoration: "none" }}>
          <MyButton className={classes.button} variant="fill-orange">
            Explore More
          </MyButton>
        </Link>
      </div>
      <div className={classes.sliderContainer}>
        <SliderSlick
          arrows={true}
          images={sliderImages}
          infinite={true}
          dots={true}
          slidesToShow={2}
        />
      </div>
    </div>
  );
};
