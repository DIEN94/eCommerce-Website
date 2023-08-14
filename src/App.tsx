import React, {} from "react";
import './styles/App.scss'
import { Header } from './components/Header/Header';
import Layout from "components/Layout/Layout";
import { AppRoutes } from "router/AppRouter";
import { Providers } from "components/Providers/Providers";

export function App() {

  return (
    <div className="myApp">
    <Providers>
      <Layout>
        <Header/>
        <AppRoutes/>
      </Layout>
    </Providers>
    </div>
  );
}