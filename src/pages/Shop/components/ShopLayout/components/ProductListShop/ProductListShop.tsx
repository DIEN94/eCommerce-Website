import React, { useMemo, useState } from "react";
import { CardOfProduct, CardOfProductWide, MyButton } from "components";
import { Pagination } from "./components/Pagination/Pagination";
import { useFetchProductsData } from "hooks/useFetchProductsData";
import classes from "./ProductListShop.module.scss";

interface IProductListShopProps {
  limitCardNumber: number;
  typeCard: string;
  onChangeTotalQuantity: (newQuantity: number) => void;
}

export const ProductListShop: React.FC<IProductListShopProps> = ({
  limitCardNumber,
  typeCard,
  onChangeTotalQuantity,
}) => {
  const [page, setPage] = useState(1);

  const { productsList, totalPages } = useFetchProductsData(
    page,
    limitCardNumber
  );
  onChangeTotalQuantity(totalPages * productsList.length);
  const CardComponent = typeCard === "Card" ? CardOfProduct : CardOfProductWide;

  const cardArray = useMemo(() => {
    let newCardArray = [];
    for (let i = 0; i < totalPages; i++) {
      newCardArray.push(i + 1);
    }
    return newCardArray;
  }, [totalPages]);

  return (
    <div className={classes.productListShop}>
      <div
        className={
          typeCard === "Card"
            ? classes.productCardBox
            : classes.productCardWideBox
        }
      >
        {productsList.map((product) => (
          <div
            className={
              typeCard === "Card"
                ? classes.cardContainer
                : classes.cardWideContainer
            }
            key={product._id}
          >
            <CardComponent
              key={product._id}
              src={product.img}
              discount={
                product.discount !== null ? product.discount : undefined
              }
              name={product.name}
              description={product.description}
              price={product.price}
              id={product._id}
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
