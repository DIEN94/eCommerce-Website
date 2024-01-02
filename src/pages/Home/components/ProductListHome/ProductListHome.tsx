import React, { useState } from "react";
import { CardOfProduct, MyButton } from "components";
import { Link } from "react-router-dom";
import { postsListShop } from "pages/Shop/components/ShopLayout/components/ProductListShop/config";
import classes from "./ProductListHome.module.scss";

export const ProductListHome = () => {
  const [posts, setPosts] = useState(postsListShop);

  return (
    <div className={classes.productListHome}>
      <p className={classes.firstLevelText}>Our Products</p>
      <div className={classes.productBox}>
        {posts.slice(-8).map((post) => (
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
