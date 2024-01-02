import React, { useMemo, useState } from "react";
import { CardOfProduct, CardOfProductWide, MyButton } from "components";
import { postsListShop } from "./config";
import { Pagination } from "./components/Pagination/Pagination";
import classes from "./ProductListShop.module.scss";

interface IProductListShopProps {
  limitCardNumber: number;
  typeCard: string;
}

export const ProductListShop: React.FC<IProductListShopProps> = ({
  limitCardNumber,
  typeCard,
}) => {
  const [page, setPage] = useState(1);
  const totalCount = postsListShop.length;
  const CardComponent = typeCard === "Card" ? CardOfProduct : CardOfProductWide;

  const getPageCount = (totalCount: number, limitCardNumber: number) => {
    return Math.ceil(totalCount / limitCardNumber);
  };

  const cardArray = useMemo(() => {
    const totalCard = getPageCount(totalCount, limitCardNumber);
    let newCardArray = [];
    for (let i = 0; i < totalCard; i++) {
      newCardArray.push(i + 1);
    }
    return newCardArray;
  }, [totalCount, limitCardNumber]);

  const cardsToShow = postsListShop.slice(
    (page - 1) * limitCardNumber,
    page * limitCardNumber
  );

  return (
    <div className={classes.productListShop}>
      <div
        className={
          typeCard === "Card"
            ? classes.productCardBox
            : classes.productCardWideBox
        }
      >
        {cardsToShow.slice(-limitCardNumber).map((post) => (
          <div
            className={
              typeCard === "Card"
                ? classes.cardContainer
                : classes.cardWideContainer
            }
            key={post.id}
          >
            <CardComponent
              src={post.src}
              label={post.label}
              productName={post.productName}
              sortDescription={post.sortDescription}
              fixPrice={post.fixPrice}
              originalPrice={post.originalPrice}
              id={post.id}
            />
          </div>
        ))}
      </div>
      <Pagination
        cardArray={cardArray}
        page={page}
        onChangePage={(newPage) => {
          setPage(newPage);
        }}
      />
    </div>
  );
};
