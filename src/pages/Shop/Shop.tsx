import React, { FC, useState } from 'react'
import { PosterPage } from 'components';
import { ShopLayout } from './components/ShopLayout/ShopLayout';
import { InformationBoard } from './components/InformationBoard/InformationBoard';
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