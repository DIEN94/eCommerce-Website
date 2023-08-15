import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'router';
import { useAppSelector } from 'hooks/redux';


export const AppRoutes = () => {

  const {isAuth} = useAppSelector(state => state.auth)

  return (
    isAuth
    ?
    <Routes>
        {privateRoutes.map(route =>
        <Route 
        {...route}
        key={route.path}
        />
        )}
    </Routes>
    :
    <Routes>
        {publicRoutes.map(route =>
        <Route 
        {...route}
        key={route.path}
        />
        )}
    </Routes>
    )}
