import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css";
import "font-awesome/css/font-awesome.min.css";
import WebFont from "webfontloader";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router } from "react-router-dom";

WebFont.load({
  google: {
    families: ["Poppins:300,600", "sans-serif"],
  },
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
