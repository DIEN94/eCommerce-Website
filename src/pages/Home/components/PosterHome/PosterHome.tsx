import React from 'react'
import homePoster from "assets/page-Home/PosterHome/home-poster.webp";
import { MyButton } from 'components';
import { Link } from 'react-router-dom';
import classes from "./PosterHome.module.scss"

export const PosterHome = () => {

  return (
    <div className={classes.posterHome}>
        <div className={classes.imgContainer}>
        <img src={homePoster} alt="homePoster"/>
        </div>
        <div className={classes.posterStick}>
          <p className={classes.firstLevelText}>
            New Arrival
          </p>
          <h2 className={classes.secondLevelText}>
            Discover Our <br/>
            New Collection
          </h2>
          <p className={classes.thirdLevelText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link to={"/shop"}>
            <MyButton 
            className={classes.button} 
            variant='fill-orange'>
              BUY NOW
            </MyButton>
          </Link>

        </div>
    </div>
  )
}
