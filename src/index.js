import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/index.css";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>< App /></Router>,
  document.getElementById("root")  
);