import React, { FC, useState } from 'react'
import { PosterPage, InformationBoard } from 'components';
import { ShopLayout } from './components/ShopLayout/ShopLayout';
import classes from "./Shop.module.scss"

export const Shop: FC = () => {

  return (
    <div className={classes.shop}>
      <PosterPage namePage='Shop'/>
      <ShopLayout/>
      <InformationBoard/>
    </div>
  )
}