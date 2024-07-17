import "./Mainpage.css";
import Nickname from "./Nickname";

function Mainpage() {
  return (
    <>
      <div className="mypage">
        <div className="box1">
          <div className="profile"></div>
        </div>
        <div className="box2">
          <div className="photo"></div>
        </div>
        <div className="box3">
          <div className="nickname"></div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
