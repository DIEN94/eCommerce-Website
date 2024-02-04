import React, { useState } from "react";
import { DropDown, MyButton } from "components";
import {
  imgControlInterfaceConfig,
  optionsNumberCardConfig,
  optionsSortByConfig,
} from "./config";
import classes from "./ControlInterface.module.scss";

interface IControlInterfaceProps {
  totalNumberCard: number;
  onChangeShowingNumberCards: (currentNumberCard: number) => void;
  onChangeSortCards: (currentSortValue: string) => void;
  onChangeCardsType: (currentType: string) => void;
}

export const ControlInterface: React.FC<IControlInterfaceProps> = ({
  totalNumberCard,
  onChangeShowingNumberCards,
  onChangeSortCards,
  onChangeCardsType,
}) => {
  const handleChangeCardNumber = (newValue: string) => {
    let newValueNumber = parseInt(newValue, 10);
    onChangeShowingNumberCards(newValueNumber);
  };

  const handleChangeCardTypeDots = () => {
    onChangeCardsType("Card");
  };

  const handleChangeCardTypeScroll = () => {
    onChangeCardsType("CardWide");
  };

  const handleDropDownSort = (newCondition: string) => {
    onChangeSortCards(newCondition);
  };

  return (
    <div className={classes.controlInterfaceContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.buttonContainer}>
          <MyButton variant="no-fill" className={classes.buttonFilter}>
            <img src={imgControlInterfaceConfig.filterIcon} alt="filterIcon" />
            <p>Filter</p>
          </MyButton>
          <MyButton
            variant="no-fill"
            className={classes.buttonDots}
            onClick={handleChangeCardTypeDots}
          >
            <img src={imgControlInterfaceConfig.fourDots} alt="fourDots" />
          </MyButton>
          <MyButton
            variant="no-fill"
            className={classes.buttonScroll}
            onClick={handleChangeCardTypeScroll}
          >
            <img src={imgControlInterfaceConfig.scrollIcon} alt="scrollIcon" />
          </MyButton>
        </div>
        <p className={classes.numberShowingCards}>
          Showing 1–16 of {totalNumberCard} results
        </p>
      </div>
      <div className={classes.dropDownBox}>
        <div className={classes.dropDownContainer}>
          <p className={classes.text}>Show</p>
          <DropDown
            className={classes.dropDownShow}
            options={optionsNumberCardConfig}
            defaultValue="16"
            arrow={false}
            onChange={handleChangeCardNumber}
          />
        </div>
        <div className={classes.dropDownContainer}>
          <p className={classes.text}>Short by</p>
          <DropDown
            className={classes.dropDownSortBy}
            options={optionsSortByConfig}
            defaultValue="Default"
            arrow={false}
            onChange={handleDropDownSort}
          />
        </div>
      </div>
    </div>
  );
};
