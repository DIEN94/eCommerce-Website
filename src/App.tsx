import React, {} from "react";
import './styles/App.scss'
import { Header } from './components/Header/Header';
import Layout from "components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "components/AppRouter/AppRouter";

export function App() {

  return (
    <div className="myApp">
    <BrowserRouter>
      <Layout>
        <Header/>
        <AppRoutes/>
      </Layout>
    </BrowserRouter>
    </div>
  );
}