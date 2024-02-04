import React, { ReactNode, useState } from "react";
import { ControlInterface } from "./components/ControlInterface/ControlInterface";
import { ProductListShop } from "./components/ProductListShop/ProductListShop";
import { useFetchProductsData } from "hooks/useFetchProductsData";
import classes from "./ShopLayout.module.scss";

type TypeCard = "Card" | "";

export const ShopLayout = () => {
  const [maxNumberCard, setMaxNumberCard] = useState(0);
  const [sortCardsValue, setSortCardsValue] = useState<string>("Default");
  const [showingCardNumber, setShowingCardNumber] = useState<number>(16);
  const [typeCard, setTypeCard] = useState<TypeCard>("Card");

  const { productsList, totalPages } = useFetchProductsData(1, maxNumberCard);

  let totalNumberCard = productsList.length;

  return (
    <div className={classes.shopLayout}>
      <ControlInterface
        totalNumberCard={totalNumberCard}
        onChangeShowingNumberCards={(newValueNumber) => {
          setShowingCardNumber(newValueNumber);
        }}
        onChangeSortCards={(newCondition) => {
          setSortCardsValue(newCondition);
        }}
        onChangeCardsType={(newType) => {
          setTypeCard(newType === "Card" ? "Card" : "");
        }}
      />
      <ProductListShop
        limitCardNumber={showingCardNumber}
        typeCard={typeCard}
        onChangeTotalQuantity={(newPage) => {
          setMaxNumberCard(newPage);
        }}
      />
    </div>
  );
};
