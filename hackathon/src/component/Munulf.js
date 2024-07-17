import React, { useState } from "react";
import "./Munulf.css";

function Munulf() {
  const [munulf, setMunulf] = useState(false);

  const toggleMunulf = () => {
    setMunulf(!munulf);
  };

  if (munulf) {
    document.body.classList.add("active-Munulf");
  } else {
    document.body.classList.remove("active-munulf");
  }

  return (
    <>
      <div className="munu">
        <div className="left">
          <button className="btn-munu1">back</button>
          <button className="munu2">test</button>
          <button className="munu3">test</button>
        </div>
      </div>
    </>
  );
}
export default Munulf;
