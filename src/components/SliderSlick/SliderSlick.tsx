import React, { FC, memo } from "react";
import Slider from "react-slick";
import { SLIDER_SIMPLE_SETTINGS } from "./settings";
import { TSliderSimpleProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSlick.scss";

export const SliderSlickComponent: FC<TSliderSimpleProps> = (props) => {
  const { images, alt = "", height, width } = props;
  const settings = SLIDER_SIMPLE_SETTINGS(props).settings;

  return (
    <Slider {...settings}>
      {images.map((image, index) => {
        return (
          <div className="sliderSlickItem" key={index}>
            <img
              alt={`img${alt}` || `img${index}`}
              className="sliderSlickImage"
              height={height}
              src={image}
              width={width}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export const SliderSlick = memo(SliderSlickComponent);
