import "./Character.css";
import bg_img from "./characterimg.png";
function Character() {
  return (
    <>
      <div className="character">
        <div className="name">반짝이는 돌</div>
        <div className="img">
          <img src={bg_img} className="bg-img" alt="bg_img" />
        </div>
      </div>
    </>
  );
}

export default Character;
