import React, { FC } from "react";
import { CardOfProductWide } from "components";
import { IFetchSearchProducts } from "API/types";
import classes from "./SearchList.module.scss";

export const SearchList: FC<IFetchSearchProducts> = ({ product }) => {
  return (
    <div className={classes.searchListContainer}>
      {product.map((product) => (
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
