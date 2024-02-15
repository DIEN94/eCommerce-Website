import React, { lazy } from "react";
import { Navigate, RouteProps } from 'react-router-dom';
const Home = lazy(() => import("pages").then(module => ({ default: module.Home })));
const About = lazy(() => import("pages").then(module => ({ default: module.About })));
const Cabinet = lazy(() => import("pages").then(module => ({ default: module.Cabinet })));
const Cart = lazy(() => import("pages").then(module => ({ default: module.Cart })));
const Checkout = lazy(() => import("pages").then(module => ({ default: module.Checkout })));
const Contact = lazy(() => import("pages").then(module => ({ default: module.Contact })));
const Like = lazy(() => import("pages").then(module => ({ default: module.Like })));
const Login = lazy(() => import("pages").then(module => ({ default: module.Login })));
const NotFoundPage = lazy(() => import("pages").then(module => ({ default: module.NotFoundPage })));
const Search = lazy(() => import("pages").then(module => ({ default: module.Search })));
const Shop = lazy(() => import("pages").then(module => ({ default: module.Shop })));
const Registration = lazy(() => import("pages").then(module => ({ default: module.Registration })));
const Product = lazy(() => import("pages").then(module => ({ default: module.Product })));

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

