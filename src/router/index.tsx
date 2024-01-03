import React from "react";
import { Navigate, RouteProps } from 'react-router-dom';
import { About, Cabinet, Cart, Checkout, Contact, Home, Like, Login, NotFoundPage, Search, Shop, Registration, Product } from "pages";



export enum RouteNames {
    HOME = '/',
    ABOUT = 'about',
    CABINET = '/cabinet',
    CART = '/cart',
    CHECKOUT = '/checkout',
    CONTACT = '/contact',
    LIKE = '/like',
    LOGIN = '/login',
    NOT_FOUND_PAGE = '404',
    SEARCH = '/search',
    SHOP = '/shop',
    REGISTRATION = 'registration',
    PRODUCT = '/shop/:id',
    REDIRECT = '*'
}

export const publicRoutes: RouteProps[] = [
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.ABOUT, element: <About/>},
    {path: RouteNames.CART, element: <Cart/>},
    {path: RouteNames.CHECKOUT, element: <Checkout/>},
    {path: RouteNames.CONTACT, element: <Contact/>},
    {path: RouteNames.LOGIN, element: <Login/>},
    {path: RouteNames.NOT_FOUND_PAGE, element: <NotFoundPage/>},
    {path: RouteNames.SEARCH, element: <Search/>},
    {path: RouteNames.SHOP, element: <Shop/>},
    {path: RouteNames.REGISTRATION, element: <Registration/>},
    {path: RouteNames.PRODUCT, element: <Product/> },
    // private
    {path: RouteNames.CABINET, element: <Navigate to={RouteNames.LOGIN} replace />},
    {path: RouteNames.LIKE, element: <Navigate to={RouteNames.LOGIN} replace />},
    {path: RouteNames.REDIRECT, element: <Navigate to={RouteNames.NOT_FOUND_PAGE} replace />}
]

export const privateRoutes: RouteProps[] = [
    {path: RouteNames.ABOUT, element: <About/>},
    {path: RouteNames.CART, element: <Cart/>},
    {path: RouteNames.CHECKOUT, element: <Checkout/>},
    {path: RouteNames.CONTACT, element: <Contact/>},
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.NOT_FOUND_PAGE, element: <NotFoundPage/>},
    {path: RouteNames.SEARCH, element: <Search/>},
    {path: RouteNames.SHOP, element: <Shop/>},
    {path: RouteNames.PRODUCT, element: <Product/> },
    // private
    {path: RouteNames.CABINET, element: <Cabinet/>},
    {path: RouteNames.LIKE, element: <Like/>},
    {path: RouteNames.REDIRECT, element: <Navigate to={RouteNames.NOT_FOUND_PAGE} replace />},
]

