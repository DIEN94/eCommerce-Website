import React, {} from "react";
import './styles/App.scss'
import { Header } from './components/Header/Header';
import Layout from "components/Layout/Layout";

export function App() {

  return (
    <div className="myApp">
      <Layout>
        <Header/>
      </Layout>
    </div>
  );
}