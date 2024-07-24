import React, { useState } from "react";

export const FriendsButton = () => {
  return <button id="friends">친구</button>;
};

export const FriendsPopup = () => {
  const [hoveredFriend, setHoveredFriend] = useState(null);

  const handleMouseEnter = (friend) => {
    setHoveredFriend(friend);
  };

  const handleMouseLeave = () => {
    setHoveredFriend(null);
  };

  return (
    <>
      <div className="popup friends_popup">
        <button className="exit"></button>
        <div className="friends">
          <ul>
            <li id="me">
              <div className="inforow">
                <div className="profileimg"></div>
                <div className="profileinfo">
                  <span className="name">이름</span>
                  <span className="info">공부하는 중...</span>
                </div>
              </div>
            </li>
            {["친구 1", "친구 2", "친구 3"].map((friend, index) => (
              <li
                className="you"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="inforow">
                  <div className="profileimg"></div>
                  <div className="profileinfo">
                    <span className="name">{friend}</span>
                    <span className="info">친구 정보 {index + 1}</span>
                  </div>
                </div>
                {hoveredFriend === index && (
                  <div
                    className="friendsinfo grow"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="name">친구 상세 이름</span>
                    <span className="info">친구 상세 정보</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
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
 