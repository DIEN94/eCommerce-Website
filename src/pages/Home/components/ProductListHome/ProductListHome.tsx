import React from "react";
import { CardOfProduct, MyButton } from "components";
import { Link } from "react-router-dom";
import { useFetchData } from "hooks/useFetchData";
import { IFetchProductsData } from "API/types";
import { urlProducts } from "API/consts";
import { Preloader } from "components/Preloader/Preloader";
import classes from "./ProductListHome.module.scss";

const ProductListHomeConfig = {
  data: {
    page: 1,
    limit: 8,
  },
};

export const ProductListHome = () => {
  const { data, error, isLoading } = useFetchData<IFetchProductsData>(
    urlProducts,
    ProductListHomeConfig
  );

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={classes.productListHome}>
      <p className={classes.firstLevelText}>Our Products</p>
      <div className={classes.productBox}>
        {data?.products.map((product) => (
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
