import React, { FC } from 'react'
import classes from "./Home.module.scss"
import { Poster } from './components/Poster/Poster';
import { RangeList } from './components/RangeList/RangeList';
import { ProductList } from './components/ProductList/ProductList';
import { Carousel } from './components/Carousel/Carousel';


export const Home: FC = () => {

  return (
    <div className={classes.home}>
      <Poster/>
      <RangeList/>
      <ProductList/>
      <Carousel/>
    </div>
  )
}
