import React from "react";

export const FriendsButton = () => {
  return <button id="friends">친구</button>;
};

export const FriendsPopup = () => {
  return (
    <div className="popup friends_popup">
      <button className="exit"></button>
      친구창
    </div>
  );
};

export const FriendsBox = () => {
  return <div className="friendsBox"></div>;
};

const Friends = {
  FriendsButton,
  FriendsBox,
  FriendsPopup,
};

export default Friends;
