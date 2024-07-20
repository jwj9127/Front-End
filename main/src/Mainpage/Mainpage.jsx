import React, { useEffect } from "react";
import "./Mainpage.css"; // CSS 파일을 가져옴
import { Mainpage } from "../main"; // main.js에서 Mainpage 함수를 가져옴
import Calendar from "react-calendar";

import WhiteSound from "../component/Whitesound"; // WhiteSound 컴포넌트를 가져옴

const MainPageComponent = () => {
  useEffect(() => {
    console.log("MainPageComponent mounted");
    Mainpage();
  }, []);

  return (
    <div className="mainPage">
      <div className="expBar">
        <button className="myPage">My Page</button>
      </div>
      <div className="clock"></div>
      <WhiteSound.WhiteSoundPopup />
      <div className="popup background_popup">
        <button className="exit"></button>
        배경이미지
      </div>
      <div className="popup friends_popup">
        <button className="exit"></button>
        친구창
      </div>
      <div className="popup callender_popup">
        <button className="exit"></button>
        <Calendar />
      </div>
      <div className="popup todolist_popup">
        <button className="exit"></button>
        <div className="todoList">
          <ul>
            <li>
              <input className="check" type="checkbox"></input>
              <input className="text" type="text"></input>
            </li>
            <li>
              <input className="check" type="checkbox"></input>
              <input className="text" type="text"></input>
            </li>
            <li>
              <input className="check" type="checkbox"></input>
              <input className="text" type="text"></input>
            </li>
            <li>
              <input className="check" type="checkbox"></input>
              <input className="text" type="text"></input>
            </li>
            <li>
              <input className="check" type="checkbox"></input>
              <input className="text" type="text"></input>
            </li>
          </ul>
        </div>
      </div>
      <div className="DG">
        <div className="LD">
          <button>인터페이스 끄기</button>
        </div>
        <div className="MD">
          <audio controls></audio>
        </div>
        <div className="RD">
          <div className="RD1">
            <WhiteSound.WhiteSoundButton />
            <button id="backgroundImage">배경이미지</button>
          </div>
          <div className="RD1">
            <button id="friends">친구</button>
            <button id="callender">캘린더</button>
            <button id="todolist">투두리스트</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
