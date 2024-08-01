import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import "./Mypage.css";
import { Link } from "react-router-dom";
import MusicPlayer from "../../component/MusicPlayer/MusicPlayer.jsx";
import Character from "../../component/Character/Character.jsx";

export default function MainPage() {
  return (
    <>
      {/* 배경화면 이미지 */}
      <div className="backgroundImage"></div>

      {/* 마이페이지 */}
      <div className="my_page_bar">
        <Link to={""} className="my_page_nav"></Link>
      </div>

      {/* 시계 */}
      <div className="clock">
        <Clock
          className="clock_detail"
          format={"HH:mm"}
          ticking={true}
          timezone={"Asia/Seoul"}
        />
      </div>

      {/* 재생 플레이어 */}
      <MusicPlayer />
      {/* <audio controls className="audio_bar"></audio> */}
      <div className="my_page_nav"></div>
      <div className="cha_pos">
        <Character></Character>
      </div>
    </>
  );
}
