import type { CSSProperties, FC, MouseEventHandler } from "react";
import { useEffect, useRef } from "react";
import { ESliderArrow } from "./enums";
import clsx from "clsx";

type TSliderArrowProps = {
  backgroundColor?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  opacity?: number;
  style?: CSSProperties;
  styles?: CSSProperties;
  type: ESliderArrow;
};

export const SliderArrow: FC<TSliderArrowProps> = ({
  backgroundColor = "#FCF8F3",
  className,
  onClick,
  opacity = 0.8,
  style,
  styles,
  type,
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.setProperty(
        "--slider-arrow-backgroundColor",
        backgroundColor
      );
      arrowRef.current.style.setProperty(
        "--slider-arrow-opacity",
        opacity.toString()
      );
    }
  }, [backgroundColor, opacity]);

  return (
    <div
      className={clsx("Slider-Arrow", className)}
      ref={arrowRef}
      style={{ ...style, ...styles }}
      onClick={onClick}
    >
      <div
        className={clsx("Slider-ArrowButton", {
          "Slider-ArrowButton__left": type === ESliderArrow.Previous,
          "Slider-ArrowButton__right": type === ESliderArrow.Next,
        })}
      >
        {type === ESliderArrow.Previous ? "<" : ">"}
      </div>
    </div>
  );
};
