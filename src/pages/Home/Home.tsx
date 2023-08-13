import React, { FC } from 'react'
import homePoster from "assets/page-Home/home-poster.webp";
import classes from "./Home.module.scss"
import { MyButton } from 'components';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
  return (
    <div className={classes.home}>
      <div className={classes.poster}>
        <img src={homePoster}/>
        <div className={classes.posterStick}>
          <p className={classes.firstLevelText}>
            New Arrival
          </p>
          <h2 className={classes.secondLevelText}>
            Discover Our <br/>
            New Collection
          </h2>
          <p className={classes.thirdLevelText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link to={"/shop"} style={{ textDecoration: 'none' }}>
            <MyButton 
            className={classes.button} 
            variant='fill-orange'>
              BUY NOW
            </MyButton>
          </Link>

        </div>
      </div>
    </div>
  )
}
