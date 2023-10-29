import React, {} from "react";
import './styles/App.scss'
import { Header } from './components/Header/Header';
import Layout from "components/Layout/Layout";
import { AppRoutes } from "router/AppRouter";
import { Footer } from "components/Footer/Footer";

export function App() {

  return (
    <div className="myApp">
      <Layout>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </Layout>
    </div>
  );
}