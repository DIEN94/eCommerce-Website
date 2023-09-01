import React, { FC } from 'react'
import classes from "./Home.module.scss"
import { Poster } from './components/Poster/Poster';
import { RangeList } from './components/RangeList/RangeList';
import { ProductList } from './components/ProductList/ProductList';
import { Carusel } from './components/Carusel/Carusel';


export const Home: FC = () => {

  return (
    <div className={classes.home}>
      <Poster/>
      <RangeList/>
      <ProductList/>
      <Carusel/>
    </div>
  )
}
