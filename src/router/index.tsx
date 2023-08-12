import React from "react";
import { Navigate, RouteProps } from 'react-router-dom';
import { About, Cabinet, Cart, Checkout, Contact, Home, Like, Search, Shop } from "components";



export enum RouteNames {
    ABOUT = 'about',
    CABINET = '/cabinet',
    CART = '/cart',
    CHECHOUT = '/checkout',
    CONTACT = '/contact',
    HOME = '/',
    LIKE = '/like',
    SEARCH = '/search',
    SHOP = '/shop',
    REDIRECT = '*'
}

export const publicRoutes: RouteProps[] = [
    {path: RouteNames.ABOUT, element: <About/>},
    {path: RouteNames.CART, element: <Cart/>},
    {path: RouteNames.CHECHOUT, element: <Checkout/>},
    {path: RouteNames.CONTACT, element: <Contact/>},
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.SEARCH, element: <Search/>},
    {path: RouteNames.SHOP, element: <Shop/>},
    {path: RouteNames.REDIRECT, element: <Navigate to={RouteNames.HOME} replace />}
]

export const privateRoutes: RouteProps[] = [
    {path: RouteNames.CABINET, element: <Cabinet/>},
    {path: RouteNames.LIKE, element: <Like/>},
    {path: RouteNames.REDIRECT, element: <Navigate to={RouteNames.HOME} replace />},
]

