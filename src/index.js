import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Function to render the app once everything has loaded
const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// Wait for all assets and the page to load completely
window.onload = renderApp;
