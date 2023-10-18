import React, { ReactNode, useState } from 'react';
import { ControlInterface } from './components/ControlInterface/ControlInterface';
import { ProductListShop } from './components/ProductListShop/ProductListShop';
import { postsListShop } from './components/ProductListShop/config';
import classes from "./ShopLayout.module.scss"

export const ShopLayout = () => {
    const defaultCardNumber = postsListShop.length;
    const [cardNumber, setCardNumber] = useState(defaultCardNumber);
    const [sortCardsValue, setSortCardsValue] = useState('Default');
    const [showingCardNumber, setShowingCardNumber] = useState(16);
    const [typeCard, setTypeCard] = useState("Card");

    return (
      <div className={classes.shopLayout}>
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
      </div>
    );
  };
