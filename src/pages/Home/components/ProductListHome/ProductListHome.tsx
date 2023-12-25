import React, { useState } from "react";
import { CardOfProduct, MyButton } from "components";
import { Link } from "react-router-dom";
import { postsListHome } from "./config";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import { likeFetchingError, likeFetchingSuccess } from "store/reducers/like";
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

  const addToLikeList = (id: number) => {
    const newLikeItem = {
      id: id,
    };

    try {
      const likeListToken = localStorage.getItem("LikeArray");
      if (likeListToken) {
        const storedLikeArray = JSON.parse(likeListToken);
        storedLikeArray.push(newLikeItem);
        dispatch(likeFetchingSuccess(storedLikeArray));
      } else {
        dispatch(likeFetchingError("Error"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLike = (id: number) => {
    interface LikeListItem {
      id: number;
    }
    const likeListToken = localStorage.getItem("LikeArray");
    if (likeListToken) {
      const storedLikeArray = JSON.parse(likeListToken);
      const newLikeArray = storedLikeArray.filter(
        (item: LikeListItem) => item.id !== id
      );
      dispatch(likeFetchingSuccess(newLikeArray));
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
              addToLikeList={() => addToLikeList(post.id)}
              deleteLike={() => deleteLike(post.id)}
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
