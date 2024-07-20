import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPageComponent from "./Mainpage/Mainpage.jsx"; // Mainpage.jsx 불러오기
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MainPageComponent /> // MainPageComponent 렌더링
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
