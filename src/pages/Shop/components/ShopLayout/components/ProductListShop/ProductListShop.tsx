import React, { useMemo, useState } from "react";
import { CardOfProduct, CardOfProductWide, MyButton } from "components";
import { postsListShop } from "./config";
import { Pagination } from "./components/Pagination/Pagination";
import { useAppDispatch } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
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

  const dispatch = useAppDispatch();

  const addToCart = (
    src: string,
    productName: string,
    productPrice: string,
    id: number
  ) => {
    const newItem = {
      src: src,
      ProductName: productName,
      ProductPrice: productPrice,
      id: id,
      quantity: 1,
    };

    try {
      const cartListToken = localStorage.getItem("CartArray");
      if (cartListToken) {
        const storedCartArray = JSON.parse(cartListToken);
        storedCartArray.push(newItem);
        dispatch(cartFetchingSuccess(storedCartArray));
      } else {
        dispatch(cartFetchingError("Error"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.productListShop}>
      <div
        className={
          typeCard === "Card"
            ? classes.productCardBox
            : classes.productCardWideBox
        }
      >
        {cardsToShow.slice(-limitCardNumber).map((post, index) => (
          <div
            className={
              typeCard === "Card"
                ? classes.cardContainer
                : classes.cardWideContainer
            }
            key={index}
          >
            <CardComponent
              src={post.src}
              label={post.label}
              ProductName={post.ProductName}
              SortDescription={post.SortDescription}
              FixPrice={post.FixPrice}
              OriginalPrice={post.OriginalPrice}
              id={post.id}
              addToCart={() =>
                addToCart(post.src, post.ProductName, post.FixPrice, post.id)
              }
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
