import "./Character.css";
import bg_img from "./character.png";

function Character() {
  return (
    <>
      <div className="character">
        <div className="name">반짝이는 돌</div> {/* 캐릭터 닉네임 */}
        <div className="img">
          <img src={bg_img} className="bg-img" alt="bg_img" />
          {/* 캐릭터 이미지 */}
        </div>
      </div>
    </>
  );
}

export default Character;
