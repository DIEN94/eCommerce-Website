import React from 'react'
import iconCart from '../../assets/page-Cabinet/iconCart.webp';
import iconLike from '../../assets/page-Cabinet/iconLike.webp';

export const createNavButtonConfig = [
    {
        text:"My Cart",
        path:"/cart",
        img: iconCart,
    },
    {
        text:"Wish list",
        path:"/like",
        img: iconLike,
    },
]