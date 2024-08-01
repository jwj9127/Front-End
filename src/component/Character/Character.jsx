import React, { useState } from "react";
import "../../pages/My/Mypage.css";
import keyboard from "../../Img/키보드캐릭터.png";
import smile from "../../Img/스마일캐릭터.png";

export default function Character() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showBox = () => {
    setIsBoxVisible(true);
  };

  const hideBox = () => {
    setIsBoxVisible(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <button className="main_page_nav">메인페이지</button>
      <button className="my_page_nav" onClick={showBox}>
        버튼
      </button>
      {isBoxVisible && (
        <div className="cha_pos_box">
          <div className="cha_pos">
            <button className="exit" onClick={hideBox}>
              X
            </button>
            <div className="ca_boxes">
              <div
                className="ca_box"
                onClick={() => handleImageClick(keyboard)}
              >
                <img src={keyboard} alt="캐릭터1" className="character_image" />
              </div>
              <div className="ca_box" onClick={() => handleImageClick(smile)}>
                <img src={smile} alt="캐릭터2" className="character_image" />
              </div>
              {/* 캐릭터박스 추가 예정 */}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="center_box">
          <img
            src={selectedImage}
            alt="선택된 캐릭터"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      )}
    </>
  );
}
