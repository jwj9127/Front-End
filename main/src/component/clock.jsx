import React from "react";
import Clock from "react-live-clock";

export const clock = () => {
  return (
    <div className="clock">
      <Clock
        className="clockCustom"
        format={"HH:mm"}
        ticking={true}
        timezone={"Asia/Seoul"}
      />
    </div>
  );
};

export default clock;
