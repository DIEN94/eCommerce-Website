import React, { Suspense } from "react";
import { Header } from "./components/Header/Header";
import Layout from "components/Layout/Layout";
import { AppRoutes } from "router/AppRouter";
import { Footer } from "components/Footer/Footer";
import { Preloader } from "components/Preloader/Preloader";
import "./styles/App.scss";

export function App() {
  return (
    <div className="myApp">
      <Suspense fallback={<Preloader />}>
        <Layout>
          <Header />
          <AppRoutes />
          <Footer />
        </Layout>
      </Suspense>
    </div>
  );
}
