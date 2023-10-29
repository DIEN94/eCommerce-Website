import React from 'react'
import logo from '../../assets/header/logo.webp';
import iconAccount from '../../assets/header/iconAccount.webp';
import iconSearch from '../../assets/header/iconSearch.webp';
import iconLike from '../../assets/header/iconLike.webp';
import iconCart from '../../assets/header/iconCart.webp';
import imgHamburgerButton from '../../assets/header/imgHamburgerButton.webp';
import buttonClose from '../../assets/header/buttonClose.webp';

export const createNavButtonConfig = [
    {
        text:"Home",
        path:"/"
    },
    {
        text:"Shop",
        path:"/shop"
    },
    {
        text:"About",
        path:"/about"
    },
    {
        text:"Contact",
        path:"/contact"
    },
]

export const imgConfig = {
    logo: `${logo}`,
    iconAccount:`${iconAccount}`,
    iconSearch:`${iconSearch}`,
    iconLike:`${iconLike}`,
    iconCart:`${iconCart}`,
    imgHamburgerButton:`${imgHamburgerButton}`,
    buttonClose:`${buttonClose}`,
}
