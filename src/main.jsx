import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./components/provider-components/app-provider.jsx";

import App from "./App.jsx";
import "./styles/main.scss";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AppProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </AppProvider>
   </React.StrictMode>
);
