import React, { useState } from 'react'
import { CardOfProduct, MyButton } from 'components';
import { Link } from 'react-router-dom';
import { postsListHome } from './config';
import classes from "./ProductListHome.module.scss"

export const ProductListHome = () => {

  const [posts, setPosts] = useState(postsListHome)

  const addToCart = () => {
    console.log("addToCart")
  };

  return (
    <div className={classes.productListHome}>
      <p className={classes.firstLevelText}>
        Our Products
      </p>
      <div className={classes.productBox}>
        {posts.slice(-8).map((post, index) =>
          <div className={classes.cardContainer}>
            <CardOfProduct key={index} src={post.src} label={post.label} ProductName={post.ProductName} SortDescription={post.SortDescription} FixPrice={post.FixPrice} OriginalPrice={post.OriginalPrice} addToCart={addToCart}/>
          </div>
        )}
      </div>
      <Link to={"/shop"}>
        <MyButton className={classes.button} variant='fill-white'>
          Show More
        </MyButton>
      </Link>
    </div>
  )
}