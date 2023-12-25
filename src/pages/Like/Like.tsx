import React, { FC, useMemo } from "react";
import { CardOfProduct, PosterPage } from "components";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { postsListShop } from "pages/Shop/components/ShopLayout/components/ProductListShop/config";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import { likeFetchingError, likeFetchingSuccess } from "store/reducers/like";
import classes from "./Like.module.scss";

interface LikeListItem {
  id: number;
  src: string;
  label?: string;
  ProductName: string;
  SortDescription: string;
  FixPrice: string;
  OriginalPrice?: string;
}

export const Like: FC = () => {
  const { likeListId } = useAppSelector((state) => state.like);
  const dispatch = useAppDispatch();
  let likeList: LikeListItem[] = [];

  let likeListChange = useMemo(() => {
    likeListId.map(({ id }) =>
      postsListShop.map((product) => {
        if (product.id === id) {
          likeList.push(product);
        }
      })
    );
  }, [likeListId, postsListShop]);

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
    <div className={classes.like}>
      <PosterPage namePage="Like list" />
      <div className={classes.likeListContainer}>
        <div className={classes.likeListBox}>
          {likeList.map((post, index) => (
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
      </div>
    </div>
  );
};
