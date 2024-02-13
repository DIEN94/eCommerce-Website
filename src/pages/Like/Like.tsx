import React, { FC, useState, useEffect } from "react";
import { CardOfProduct, PosterPage } from "components";
import { useAppSelector } from "hooks/redux";
import { productsAPI } from "API/productsAPI";
import classes from "./Like.module.scss";

export const Like: FC = () => {
  const { likeListId } = useAppSelector((state) => state.like);
  const [likeListChange, setLikeListChange] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedProducts = await Promise.all(
        likeListId.map(async (item) => {
          try {
            const result = await productsAPI.getProductById(item.id);
            return result?.product;
          } catch (error) {
            console.error("Error fetching data:", error);
            return null;
          }
        })
      );
      setIsLoading(false);
      setLikeListChange(fetchedProducts.filter((product) => product !== null));
    };

    fetchData();
  }, [likeListId]);

  return (
    <div className={classes.like}>
      <PosterPage namePage="Like list" />
      <div className={classes.likeListContainer}>
        <div className={classes.likeListBox}>
          {isLoading ? (
            <p>Loading...</p>
          ) : likeListChange.length ? (
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
