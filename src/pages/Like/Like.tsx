import React, { FC, useMemo } from "react";
import { CardOfProduct, PosterPage } from "components";
import { useAppSelector } from "hooks/redux";
import { postsListShop } from "pages/Shop/components/ShopLayout/components/ProductListShop/config";
import classes from "./Like.module.scss";

export const Like: FC = () => {
  const { likeListId } = useAppSelector((state) => state.like);

  let likeListChange = useMemo(() => {
    return postsListShop.filter((product) =>
      likeListId.some((likedProduct) => likedProduct.id === product.id)
    );
  }, [likeListId, postsListShop]);

  return (
    <div className={classes.like}>
      <PosterPage namePage="Like list" />
      <div className={classes.likeListContainer}>
        <div className={classes.likeListBox}>
          {likeListChange.length ? (
            likeListChange.map((post) => (
              <div className={classes.cardContainer} key={post.id}>
                <CardOfProduct
                  key={post.id}
                  src={post.src}
                  label={post.label}
                  productName={post.productName}
                  sortDescription={post.sortDescription}
                  fixPrice={post.fixPrice}
                  originalPrice={post.originalPrice}
                  id={post.id}
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
