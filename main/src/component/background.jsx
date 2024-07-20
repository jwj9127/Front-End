import React from "react";

export const BackgroundButton = () => {
  return <button id="backgroundImage">배경이미지</button>;
};

export const BackgroundPopup = () => {
  return (
    <div className="popup background_popup">
      <button className="exit"></button>
      배경이미지
    </div>
  );
};

export const BackgroundBox = () => {
  return <div className="backgroundBox"></div>;
};

const Background = {
  BackgroundButton,
  BackgroundPopup,
  BackgroundBox,
};

export default Background;
