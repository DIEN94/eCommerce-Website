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
      {searchProducts.map((post) => (
        <div className={classes.cardContainer} key={post.id}>
          <CardOfProductWide
            key={post.id}
            src={post.src}
            label={post.label}
            productName={post.ProductName}
            sortDescription={post.SortDescription}
            fixPrice={post.FixPrice}
            originalPrice={post.OriginalPrice}
            id={post.id}
          />
        </div>
      ))}
    </div>
  );
};
