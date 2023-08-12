import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Providers } from "components/Providers/Providers";
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Providers>
    <App />
  </Providers>
);
