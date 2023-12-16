import React, { useState } from "react";
import { CardOfProduct, MyButton } from "components";
import { Link } from "react-router-dom";
import { postsListHome } from "./config";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import classes from "./ProductListHome.module.scss";

export const ProductListHome = () => {
  const [posts, setPosts] = useState(postsListHome);

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
    <div className={classes.productListHome}>
      <p className={classes.firstLevelText}>Our Products</p>
      <div className={classes.productBox}>
        {posts.slice(-8).map((post, index) => (
          <div className={classes.cardContainer} key={index}>
            <CardOfProduct
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
      <Link to={"/shop"}>
        <MyButton className={classes.button} variant="fill-white">
          Show More
        </MyButton>
      </Link>
    </div>
  );
};
