import React, { useEffect } from "react";
import "./App.css";
import { mainPage } from "./main";

function App() {
  useEffect(() => {
    mainPage();
  }, []);

  return (
    <>
      <button className="myPage">My Page</button>
      <div className="mainPage">
        <div className="clock"></div> {/* 시계 */}
        <div className="popup whiteSound_popup">
          <button className="exit"></button>
          백색소음
        </div>
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
          캘린더
        </div>
        <div className="popup todolist_popup">
          <button className="exit"></button>
          투두리스트
        </div>
        {/* 백색소음, 배경이미지선택, 친구, 캘린더, 투두리스트 창 */}
        <div className="DG">
          <div className="LD">
            <button>인터페이스 끄기</button> {/* 인터페이스 끄기 버튼 */}
          </div>
          <div className="MD">
            <audio controls></audio> {/* 오디오 컨트롤 */}
          </div>
          <div className="RD">
            {/* 나중에 글씨 없애고 이미지 넣을 예정 */}
            <button id="whiteSound">백색소음</button>
            <button id="backgroundImage">배경이미지</button>
            <button id="friends">친구</button>
            <button id="callender">캘린더</button>
            <button id="todolist">투두리스트</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
