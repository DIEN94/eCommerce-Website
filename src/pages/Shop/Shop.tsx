import React, { FC, useState } from 'react'
import { PosterPage } from 'components';
import { ControlInterface } from './components/ControlInterface/ControlInterface';
import { ProductListShop } from './components/ProductListShop/ProductListShop';
import { postsListShop } from './components/ProductListShop/config';
import { InformationBoard } from './components/InformationBoard/InformationBoard';
import classes from "./Shop.module.scss"

export const Shop: FC = () => {
  const defaultCardNumber = postsListShop.length;
  const [cardNumber, setCardNumber] = useState(defaultCardNumber);
  const [sortCardsValue, setSortCardsValue] = useState('Default');
  const [showingCardNumber, setShowingCardNumber] = useState(16);
  const [typeCard, setTypeCard] = useState("Card");

  return (
    <div className={classes.shop}>
      <PosterPage namePage='Shop'/>
      <ControlInterface
      cardNumber = {cardNumber}
      onChangeShowingNumberCards={(newValueNumber) => {
        setShowingCardNumber(newValueNumber);
      }}
      onChangeSortCards={(newCondition) => {
        setSortCardsValue(newCondition);
      }}
      onChangeCardsType = {(newType) => {
        setTypeCard(newType);
      }}
      />
      <ProductListShop 
      limitCardNumber={showingCardNumber}
      typeCard={typeCard}
      />
      <InformationBoard/>
    </div>
  )
}