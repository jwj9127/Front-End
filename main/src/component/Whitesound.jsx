import React from "react";

export const WhiteSoundButton = () => {
  return <button id="whiteSound">백색소음</button>;
};

export const WhiteSoundPopup = () => {
  return (
    <div className="popup whiteSound_popup">
      <button className="exit"></button>
      <WhiteSoundBox />
    </div>
  );
};

export const WhiteSoundBox = () => {
  return <div className="whiteSoundBox"></div>;
};

const WhiteSound = {
  WhiteSoundButton,
  WhiteSoundPopup,
  WhiteSoundBox,
};

export default WhiteSound;
