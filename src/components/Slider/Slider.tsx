import React, { useState, useEffect, cloneElement } from 'react';
import { MyButton } from 'components/Button/MyButton';
import Circle from "assets/Slider/Circle.webp";
import Arrow from "assets/Slider/Arrow.webp";
import Arrow2 from "assets/Slider/Arrow2.webp";
import ActiveDot from "assets/Slider/Dots/ActiveDot.webp";
import Dot from "assets/Slider/Dots/Dot.webp";
import CircleDot from "assets/Slider/Dots/CircleDot.webp";
import classes from "./Slider.module.scss";

interface ICharacteristics {
  number: number;
  type: string;
  name: string;
}

interface ISlider {
    children: React.ReactNode[];
    characteristics?: ICharacteristics[]
    PAGE_WIDTH: number;
    PAGE_WIDTH_STICK: number;
}

export const Slider: React.FC<ISlider> = ({ children, characteristics, PAGE_WIDTH, PAGE_WIDTH_STICK}) => {
  const [pages, setPages] = useState<React.ReactNode[]>([]);
  const [nameSticks, setNameSticks] = useState<React.ReactNode[]>([]);
  const [dots, setDots] = useState<React.ReactNode[]>([]);
  const [offsetPage, setOffsetPage] = useState(0);
  const [offsetNameStick, setOffsetNameStick] = useState(0);
  const [lengthPages, setLengthPages] = useState(0);
  const [activePageIndex, setActivePageIndex] = useState(0);


  // children

  useEffect(() => {
      const newPages = children.map((child, index) => {
        if(index === lengthPages) {
          return cloneElement(child as React.ReactElement, {
            className: classes['active-page'],
            style: {
              minWidth: `${PAGE_WIDTH}px`,
              maxWidth: `${PAGE_WIDTH}px`,
            },
          });
        }
  
        return cloneElement(child as React.ReactElement, {
          className: classes.page,
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      });
      setPages(newPages as React.ReactNode[]);

  }, [children, lengthPages, PAGE_WIDTH]);

  // characteristics

  useEffect(() => {
    if (characteristics) {
      const newNameSticks = characteristics.map((object) => {
        const formattedNumber = object.number < 10 ? `0${object.number}` : object.number;
        const type = object.type
  
        return (
          <div key={object.number} className={classes.characteristicStick}>
            <div className={classes.numberAndType}>{formattedNumber} - {type}</div>
            <div className={classes.name}>{object.name}</div>
          </div>
        );
      });
      setNameSticks(newNameSticks as React.ReactNode[]);
    }
  }, [characteristics, activePageIndex]);

  // dots
  useEffect(() => {
  const newDots = pages.map((page, index) => {
    if(index === activePageIndex) {
      return (
        <MyButton variant="no-fill" key={index} className={classes.dots} onClick={() => handleDotClick(index)}>
         <img src={CircleDot} alt={`Dot ${index + 1}`}/>
         <img src={ActiveDot} alt={`Dot ${index + 1}`} className={classes.activeDot}/>
        </MyButton>
      )
    }
    return(
      <MyButton variant="no-fill" key={index} className={classes.dots} onClick={() => handleDotClick(index)}>
      <img src={Dot} alt={`Dot ${index + 1}`}/>
     </MyButton>
    )
  })
  setDots(newDots as React.ReactNode[]);
  }, [activePageIndex, pages]);

  // functions

  const handleRightArrowClick = () => {
    setOffsetPage((currentOffsetPage) => {
      const newOffsetPage = currentOffsetPage - PAGE_WIDTH;
      const maxOffsetPage = -(PAGE_WIDTH * (pages.length - 1));

      if (newOffsetPage < maxOffsetPage) {
        return 0;
      }
      return Math.max(newOffsetPage, maxOffsetPage);
      
    });

    setOffsetNameStick((currentOffsetNameStick) => {
      const newOffsetNameStick = currentOffsetNameStick - PAGE_WIDTH_STICK;
      const maxOffsetNameStick = -(PAGE_WIDTH_STICK * (pages.length - 1));

      if (newOffsetNameStick < maxOffsetNameStick) {
        return 0;
      }
      return Math.max(newOffsetNameStick, maxOffsetNameStick);
      
    });

    setLengthPages((currentLengthPages) => {
      const newLengthPages = currentLengthPages +1;
      
      if (newLengthPages >= pages.length) {
        setLengthPages (0)
      }
      return newLengthPages
    })

    setActivePageIndex((currentLengthPages) => {
      const newLengthPages = currentLengthPages +1;
      
      if (newLengthPages >= pages.length) {
        setActivePageIndex (0)
      }
      return newLengthPages})
  };

  const handleDotClick = (indexClicked:number) => {
    setOffsetPage(-PAGE_WIDTH * indexClicked);
    setOffsetNameStick(-PAGE_WIDTH_STICK * indexClicked);
    setLengthPages(indexClicked);
    setActivePageIndex(indexClicked);
  };

  return (
    <div className={classes.container}>
      <div className={classes.window}>
        <div
          className={classes['all-pages-container']}
          style={{
            transform: `translateX(${offsetPage}px)`,
          }}
        >
          {pages}
        </div>
      </div>
          
      <div className={classes.windowNameStick}>
        <div
          className={classes['all-characteristics-container']}
          style={{
            transform: `translateX(${offsetNameStick}px)`,
          }}
        >
          {nameSticks}
        </div>
      </div>

      <div className={classes.firstButtonContainer}>
        <img src={Circle} className={classes.circleImage} alt="Circle"/>
        <MyButton className={classes.buttonCircle} variant="no-fill" onClick={handleRightArrowClick}>
          <img src={Arrow} alt="Arrow"/>
        </MyButton>
      </div>
      <div className={classes.secondButtonContainer}>
        <MyButton className={classes.buttonSquare} variant="fill-orange" onClick={handleRightArrowClick}>
          <img src={Arrow2} alt="Arrow2"/>
        </MyButton>
      </div>
      <div className={classes.dotsContainer}>
        {dots}
      </div>
    </div>
  );
};