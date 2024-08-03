import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPageComponent from "./Mainpage/Mainpage.jsx"; // Mainpage.jsx 불러오기
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MainPageComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
