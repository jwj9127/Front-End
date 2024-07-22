import React, { useState } from "react";
import "./MenuRightPopup.css"; // 스타일이 포함된 css 파일

function MenuRightPopup() {
  const [popup, setPopup] = useState(null);

  const handleButtonClick = (popupType) => {
    setPopup(popupType);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <div className="App">
      <div id="Munu_right_btn">
        <button
          onClick={() => handleButtonClick("popup1")}
          className="Munu_right_btn_style"
        >
          Menu 1
        </button>
        {/* <button
          onClick={() => handleButtonClick("popup2")}
          className="Munu_right_btn_style"
        >
          Menu 2
        </button> */}
        <button
          onClick={() => handleButtonClick("popup3")}
          className="Munu_right_btn_style"
        >
          Menu 3
        </button>
      </div>
      {/*  우측 하단 메뉴들 */}

      {popup === "popup1" && (
        <div className="popup">
          <div className="popup-content" id="popup_content_1">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            <h2> 캐릭터 선택 </h2>
            <p>This is the first popup.</p>
          </div>
        </div>
      )}
      {/* 우측 하단 1번 메뉴  팝업 */}

      {/* {popup === "popup2" && (
        <div className="popup">
          <div className="popup-content" id="popup_content_2">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            <h2> 마이페이지 배경화면 </h2>
            <p>This is the second popup.</p>
          </div>
        </div>
      )} */}
      {/* 우측 하단 2번 메뉴 팝업 */}

      {popup === "popup3" && (
        <div className="popup" id="popup3_backcolor">
          <div className="popup-content" id="popup_content_3">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            <h2> 구독 서비스 </h2>
            <p>This is the third popup.</p>
          </div>
        </div>
      )}
      {/* 우측 하단 3번 메뉴 팝업*/}
    </div>
  );
}

export default MenuRightPopup;
