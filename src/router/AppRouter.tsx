import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "router";
import { useAppSelector } from "hooks/redux";

export const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  );
};
