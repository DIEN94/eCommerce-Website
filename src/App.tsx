import React, {} from "react";
import './styles/App.scss'
import { Header } from './components/Header/Header';
import Layout from "components/Layout/Layout";
import { AppRoutes } from "router/AppRouter";

export function App() {

  return (
    <div className="myApp">
      <Layout>
        <Header/>
        <AppRoutes/>
      </Layout>
    </div>
  );
}