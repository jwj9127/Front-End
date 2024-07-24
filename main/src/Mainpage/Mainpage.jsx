import React, { useEffect } from "react";
import "./Mainpage.css";
import { Mainpage } from "../main";
import Calendar from "react-calendar";
import WhiteSound from "../component/Whitesound";
import Background from "../component/background";
import Friends from "../component/friends";
import Todolist from "../component/todolist";
import Calender1 from "../component/calender";
import Clock from "../component/clock";
import MypageBar from "../component/mypage";
const MainPageComponent = () => {
  useEffect(() => {
    Mainpage();
  }, []);

  return (
    <div className="mainPage">
      <div className="backgroundImage"></div>
      <MypageBar />
      <div>
        <Clock />
      </div>
      <WhiteSound.WhiteSoundPopup />
      <Background.BackgroundPopup />
      <Friends.FriendsPopup />
      <div className="popup calender_popup">
        <button className="exit"></button>
        <Calendar />
      </div>
      <Todolist.TodolistPopup />
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
            <Calender1.calenderButton />
            <Todolist.TodolistButoon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
