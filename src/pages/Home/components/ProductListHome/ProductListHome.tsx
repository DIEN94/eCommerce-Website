import React from "react";
import { CardOfProduct, MyButton } from "components";
import { Link } from "react-router-dom";
import { useFetchProductsData } from "hooks/useFetchProductsData";
import classes from "./ProductListHome.module.scss";

export const ProductListHome = () => {
  const page = 1;
  const limit = 8;

  const productsList = useFetchProductsData(page, limit).productsList;

  return (
    <div className={classes.productListHome}>
      <p className={classes.firstLevelText}>Our Products</p>
      <div className={classes.productBox}>
        {productsList.map((product) => (
          <div className={classes.cardContainer} key={product._id}>
            <CardOfProduct
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
      <Link to={"/shop"}>
        <MyButton className={classes.button} variant="fill-white">
          Show More
        </MyButton>
      </Link>
    </div>
  );
};
