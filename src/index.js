import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App/>
  </Router>,
  document.getElementById("root")  
);