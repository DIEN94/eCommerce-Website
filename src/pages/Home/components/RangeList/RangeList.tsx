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
            {createNavButtonConfig.map(({path, text, img}, index)=> {
            return (
                <Link 
                className={classes.link}
                key={index}
                to={path}>
                    <MyButton             
                    variant="no-fill"
                    className={classes.button}>
                        <img src={img} alt={`${img}`}/>
                    <p>{text}</p>
                    <div className={classes.line}></div>
                    </MyButton>
                </Link>
            );
      })}
        </nav>
    </div>
  )
}
