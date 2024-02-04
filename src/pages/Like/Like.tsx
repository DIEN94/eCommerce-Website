import React, { FC, useMemo } from "react";
import { CardOfProduct, PosterPage } from "components";
import { useAppSelector } from "hooks/redux";
import { useFetchProductsData } from "hooks/useFetchProductsData";
import classes from "./Like.module.scss";

export const Like: FC = () => {
  const { likeListId } = useAppSelector((state) => state.like);
  const page = 1;
  const limit = 18;

  const { productsList, totalPages } = useFetchProductsData(page, limit);

  let likeListChange = useMemo(() => {
    return productsList.filter((product) =>
      likeListId.some((likedProduct) => likedProduct.id === product._id)
    );
  }, [likeListId, productsList]);

  return (
    <div className={classes.like}>
      <PosterPage namePage="Like list" />
      <div className={classes.likeListContainer}>
        <div className={classes.likeListBox}>
          {likeListChange.length ? (
            likeListChange.map((product) => (
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
            ))
          ) : (
            <p className={classes.emptyText}>Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};
