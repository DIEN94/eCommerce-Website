import React, { useMemo, useState } from "react";
import { CardOfProduct, CardOfProductWide, MyButton } from "components";
import { Pagination } from "./components/Pagination/Pagination";
import { useFetchData } from "hooks/useFetchData";
import { IFetchProductsData } from "API/types";
import { urlProducts } from "API/consts";
import { Preloader } from "components/Preloader/Preloader";
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

  const ProductListConfig = {
    data: {
      page: page,
      limit: limitCardNumber,
    },
  };

  const { data, error, isLoading } = useFetchData<IFetchProductsData>(
    urlProducts,
    ProductListConfig,
    [page, limitCardNumber]
  );

  let productsList = data ? data.products : [];
  let totalPages = data ? data.totalPages : 0;

  const CardComponent = typeCard === "Card" ? CardOfProduct : CardOfProductWide;

  const cardArray = useMemo(() => {
    let newCardArray = [];
    for (let i = 0; i < totalPages; i++) {
      newCardArray.push(i + 1);
    }
    return newCardArray;
  }, [totalPages]);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
