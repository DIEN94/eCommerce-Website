import React, { useState } from 'react'
import { MyButton } from 'components';
import classes from "./RangeList.module.scss"
import { createNavButtonConfig } from 'pages/Home/config';
import { Link } from 'react-router-dom';


export const RangeList = () => {

const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={classes.rangeList}>
        <p className={classes.firstLevelText}>
            Browse The Range
        </p>
        <p className={classes.secondLevelText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <nav className={classes.routeButtonsBox}>
            {createNavButtonConfig.map(({path, text, img})=> {
            return (
                <Link 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${classes.link} ${isHovered ? classes.show : ""}`} 
                to={path}>
                    <MyButton             
                    variant="no-fill"
                    className={classes.button}>
                    <img src={img}/>
                    <p
                    >{text}</p>
                    </MyButton>
                </Link>
            );
      })}
        </nav>
    </div>
  )
}
