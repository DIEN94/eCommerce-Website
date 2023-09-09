import React, { useState } from 'react'
import { MyButton } from 'components';
import { createNavButtonConfig } from 'pages/Home/components/RangeList/config';
import { Link } from 'react-router-dom';
import classes from "./RangeList.module.scss"


export const RangeList = () => {

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
                className={classes.link}
                to={path}>
                    <MyButton             
                    variant="no-fill"
                    className={classes.button}>
                    <img src={img}/>
                    <p>{text}</p>
                    </MyButton>
                </Link>
            );
      })}
        </nav>
    </div>
  )
}
