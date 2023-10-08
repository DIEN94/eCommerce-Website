import React, { FC } from 'react'
import classes from "./Home.module.scss"
import { PosterHome } from './components/PosterHome/PosterHome';
import { RangeList } from './components/RangeList/RangeList';
import { ProductListHome } from './components/ProductListHome/ProductListHome';
import { Carousel } from './components/Carousel/Carousel';
import { Gallery } from './components/Gallery/Gallery';


export const Home: FC = () => {

  return (
    <div className={classes.home}>
      <PosterHome/>
      <RangeList/>
      <ProductListHome/>
      <Carousel/>
      <Gallery/>
    </div>
  )
}
