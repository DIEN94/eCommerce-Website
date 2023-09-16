import React, { useState } from 'react'
import { CardOfProduct, MyButton } from 'components';
import { Link } from 'react-router-dom';
import { postsList } from './config';
import classes from "./ProductList.module.scss"

export const ProductList = () => {

  const [posts, setPosts] = useState(postsList)

  return (
    <div className={classes.productList}>
      <p className={classes.firstLevelText}>
        Our Products
      </p>
      <div className={classes.productBox}>
        {posts.slice(-8).map((post, index) =>
          <div className={classes.cardContainer}>
            <CardOfProduct key={index} src={post.src} label={post.label} ProductName={post.ProductName} SortDescription={post.SortDescription} FixPrice={post.FixPrice} OriginalPrice={post.OriginalPrice} />
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