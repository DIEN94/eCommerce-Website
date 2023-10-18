import React, { useState } from 'react'
import { DropDown, MyButton } from 'components';
import { imgControlInterfaceConfig, optionsNumberCardConfig, optionsSortByConfig } from './config';
import classes from "./ControlInterface.module.scss"

interface IControlInterfaceProps {
  cardNumber: number;
  onChangeShowingNumberCards: (currentNumberCard: number) => void;
  onChangeSortCards: (currentSortValue: string) => void;
  onChangeCardsType: (currentType: string) => void;
}

export const ControlInterface: React.FC<IControlInterfaceProps> = ({cardNumber, onChangeShowingNumberCards, onChangeSortCards, onChangeCardsType}) => {

      const handleChangeCardNumber = (newValue:string) => {
        let newValueNumber = parseInt(newValue, 10)
        onChangeShowingNumberCards(newValueNumber);
      };

      const handleChangeCardTypeDots = () => {
        onChangeCardsType("Card");
      };

      const handleChangeCardTypeScroll = () => {
        onChangeCardsType("CardWide");
      };

      const handleDropDownSort = (newCondition:string) => {
        onChangeSortCards(newCondition);
      };

  return (
    <div className={classes.controlInterfaceContainer}>
    <div className={classes.leftContainer}>
    <div className={classes.buttonContainer}> 
      <MyButton             
        variant="no-fill"
        className={classes.buttonFilter}
      >
          <img src={imgControlInterfaceConfig.filterIcon} alt="filterIcon"/>
          <p>Filter</p>
      </MyButton>
      <MyButton             
        variant="no-fill"
        className={classes.buttonDots}
        onClick={handleChangeCardTypeDots}
        >
          <img src={imgControlInterfaceConfig.fourDots} alt="fourDots"/>
      </MyButton>
      <MyButton             
        variant="no-fill"
        className={classes.buttonScroll}
        onClick={handleChangeCardTypeScroll}
        >
          <img src={imgControlInterfaceConfig.scrollIcon} alt="scrollIcon"/>
      </MyButton>
    </div>  
    <p className={classes.numberShowingCards}>
      Showing 1–16 of {cardNumber} results
    </p>
    </div>
    <div className={classes.dropDownContainer}>
      <div className={classes.dropDownShowContainer}>
      <p>Show</p>
      <DropDown 
      className={classes.dropDownShow}
      options={optionsNumberCardConfig} 
      defaultValue="16"
      onChange={handleChangeCardNumber}
      variant="cardFilter"
      />
      </div>
      <div className={classes.dropDownSortByContainer}>
      <p>Short by</p>
      <DropDown 
      className={classes.dropDownSortBy}
      options={optionsSortByConfig} 
      defaultValue="Default"
      onChange={handleDropDownSort}
      variant="cardFilter"
      />
      </div>
    </div>
  </div>
  )
}
