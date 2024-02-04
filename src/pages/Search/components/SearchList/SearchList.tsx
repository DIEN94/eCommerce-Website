import React, { FC } from "react";
import { CardOfProductWide } from "components";
import { useAppDispatch } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import classes from "./SearchList.module.scss";

interface IOption {
  title: string;
  description: string;
}

interface ISearchListProps {
  searchProducts: {
    _id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    discount: null | number;
    dateOfCreating: Date;
    code: string;
    options: IOption[];
    published: boolean;
    tags: string[];
    rating: number;
    img: string[];
  }[];
}

export const SearchList: FC<ISearchListProps> = ({ searchProducts }) => {
  const dispatch = useAppDispatch();

  const addToCart = (src: string, name: string, price: string, id: number) => {
    const newItem = {
      src: src,
      name: name,
      price: price,
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
      {searchProducts.map((product) => (
        <div className={classes.cardContainer} key={product._id}>
          <CardOfProductWide
            key={product._id}
            src={product.img}
            discount={product.discount !== null ? product.discount : undefined}
            name={product.name}
            description={product.description}
            price={product.price}
            id={product._id}
          />
        </div>
      ))}
    </div>
  );
};
