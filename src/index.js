import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PreLoader from "./Components/Utility/PreLoader.jsx";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PreLoader />
    <App />
  </React.StrictMode>
);
