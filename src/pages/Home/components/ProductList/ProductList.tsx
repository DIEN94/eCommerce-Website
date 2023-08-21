import React, { useState } from 'react'
import classes from "./ProductList.module.scss"
import Syltherine from "assets/page-Home/ProductList/Syltherine.webp";
import Leviosa from "assets/page-Home/ProductList/Leviosa.webp";
import Lolito from "assets/page-Home/ProductList/Lolito.webp";
import Respira from "assets/page-Home/ProductList/Respira.webp";
import Grifo from "assets/page-Home/ProductList/Grifo.webp";
import Muggo from "assets/page-Home/ProductList/Muggo.webp";
import Pingky from "assets/page-Home/ProductList/Pingky.webp";
import Potty from "assets/page-Home/ProductList/Potty.webp";
import thirty from "assets/page-Home/ProductList/label/thirty.webp";
import fifty from "assets/page-Home/ProductList/label/thirty.webp";
import NewProduct from "assets/page-Home/ProductList/label/NewProduct.webp";
import { CardOfProduct, MyButton } from 'components';
import { Link } from 'react-router-dom';
 

export const ProductList = () => {

const [posts, setPosts] = useState([
    {id:1, src: Syltherine, label:thirty, ProductName:"Syltherine", SortDescription:"Stylish cafe chair", FixPrice:"Rp 2.500.000", OriginalPrice:"Rp 3.500.000"},
    {id:2, src: Leviosa, ProductName:"Leviosa", SortDescription:"Stylish cafe chair", FixPrice:"Rp 2.500.000"},
    {id:3, src: Lolito, label:fifty, ProductName:"Lolito", SortDescription:"Luxury big sofa", FixPrice:"Rp 7.000.000", OriginalPrice:"Rp 14.000.000"},
    {id:4, src: Respira, ProductName:"Respira", SortDescription:"Outdoor bar table and stool", FixPrice:"Rp 500.000"},
    {id:5, src: Grifo, ProductName:"Grifo", SortDescription:"Night lamp", FixPrice:"Rp 1.500.000"},
    {id:6, src: Muggo, label:NewProduct, ProductName:"Muggo", SortDescription:"Small mug", FixPrice:"Rp 150.000"},
    {id:7, src: Pingky, label:fifty, ProductName:"Pingky", SortDescription:"Cute bed set", FixPrice:"Rp 7.000.000", OriginalPrice:"Rp 14.000.000"},
    {id:8, src: Potty, label:NewProduct, ProductName:"Potty", SortDescription:"Minimalist flower pot", FixPrice:"Rp 2.500.000", OriginalPrice:"Rp 3.500.000"},
])

  return (
    <div className={classes.productList}>
        <p className={classes.firstLevelText}>
            Our Products
        </p>
        <div className={classes.productBox}>
            {posts.slice(-8).map((post)=>
            <CardOfProduct src={post.src} label={post.label} ProductName={post.ProductName} SortDescription={post.SortDescription} FixPrice={post.FixPrice} OriginalPrice={post.OriginalPrice}/>)}
        </div>
        <Link to={"/shop"} style={{ textDecoration: 'none' }}>
          <MyButton className={classes.button} variant='fill-white'>
            Show More
          </MyButton>
        </Link>
    </div>
  )
}