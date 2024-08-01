import React from "react";

export const WhiteSoundButton = () => {
  return <button id="whiteSound">백색소음</button>;
};

export const WhiteSoundPopup = () => {
  return (
    <div className="popup whiteSound_popup">
      <button className="exit">Exit</button>
      <div className="popup_content">
        <div className="whiteSoundBox"></div>
        <div className="whiteSoundBox"></div>
        <div className="whiteSoundBox"></div>
        <div className="whiteSoundBox"></div>
        <div className="whiteSoundBox"></div>
        <div className="whiteSoundBox"></div>
      </div>
    </div>
  );
};

const WhiteSound = {
  WhiteSoundButton,
  WhiteSoundPopup,
};

export default WhiteSound;
