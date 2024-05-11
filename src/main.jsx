import React from "react";
import ReactDOM from "react-dom/client"; // Allows us to work with the DOM
import App from "./App.jsx";
import "./index.css"; // Provides styling 

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode checks for potential problems in your app (deprecated and unsafe life cycle methods legacy context api usage )
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
