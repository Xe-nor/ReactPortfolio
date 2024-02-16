import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Function to render the app once everything has loaded
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Wait for all assets and the page to load completely
window.onload = renderApp;
