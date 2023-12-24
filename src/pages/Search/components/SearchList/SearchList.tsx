import React, { FC } from "react";
import { CardOfProductWide } from "components";
import { useAppDispatch } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import classes from "./SearchList.module.scss";

interface ISearchListProps {
  searchProducts: {
    id: number;
    src: string;
    label?: string;
    ProductName: string;
    SortDescription: string;
    FixPrice: string;
    OriginalPrice?: string;
  }[];
}

export const SearchList: FC<ISearchListProps> = ({ searchProducts }) => {
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
    <div className={classes.searchListContainer}>
      {searchProducts.map((post, index) => (
        <div className={classes.cardContainer} key={index}>
          <CardOfProductWide
            key={index}
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
  );
};
