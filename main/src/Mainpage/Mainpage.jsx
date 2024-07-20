import React, { useEffect } from "react";
import "./Mainpage.css"; // CSS 파일을 가져옴
import { Mainpage } from "../main"; // main.js에서 Mainpage 함수를 가져옴
import Calendar from "react-calendar";
import WhiteSound from "../component/Whitesound"; // WhiteSound 컴포넌트를 가져옴
import Background from "../component/background";
import Friends from "../component/friends";
import Todolist from "../component/todolist";
import Calender1 from "../component/calender";

const MainPageComponent = () => {
  useEffect(() => {
    Mainpage();
  }, []);

  return (
    <div className="mainPage">
      <div className="expBar">
        <button className="myPage">My Page</button>
      </div>
      <div className="clock"></div>
      <WhiteSound.WhiteSoundPopup />
      <Background.BackgroundPopup />
      <Friends.FriendsPopup />
      <div className="popup calender_popup">
        <button className="exit"></button>
        <Calendar />
      </div>
      <Todolist.TodolistPopup></Todolist.TodolistPopup>
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
            <Background.BackgroundButton />
          </div>
          <div className="RD1">
            <Friends.FriendsButton />
            <Calender1.calenderButton></Calender1.calenderButton>
            <Todolist.TodolistButoon></Todolist.TodolistButoon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
