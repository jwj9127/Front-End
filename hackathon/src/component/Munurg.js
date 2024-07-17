import React, { useState } from "react";
import "./Munurg.css";

function Munurg() {
  const [munurg, setMunurg] = useState(false);

  const toggleMunurg = () => {
    setMunurg(!munurg);
  };

  if (munurg) {
    document.body.classList.add("active-Munurg");
  } else {
    document.body.classList.remove("active-munurg");
  }

  return (
    <>
      <div className="munu">
        <div className="right">
          <button onClick={toggleMunurg} className="btn-munu1">
            캐릭
          </button>
          {munurg && (
            <div className="munurg">
              <div onClick={toggleMunurg} className="overlay"></div>
              <div className="munurg-munu1-content">
                <h3 className="titile">캐릭터 선택창</h3>
                <div className="box"></div>
                <button className="close-btn" onClick={toggleMunurg}>
                  X
                </button>
              </div>
            </div>
          )}
          <button className="munu2">test</button>
          <button className="munu3">test</button>
        </div>
      </div>
    </>
  );
}
export default Munurg;
