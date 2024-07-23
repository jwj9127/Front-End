import "./Musicbar.css";

function Musicbar() {
  return (
    <>
      <div className="music">
        <div className="bar"></div> {/* 음악 재생 바 레이아웃 */}
        <div className="music-img"></div> {/* 음악 프로필 */}
        <div className="play-btn">
          {/* 음악 재생및 기능 버튼들 */}
          <div className="btn1"></div>
          <div className="btn2"></div>
          <div className="btn3"></div>
        </div>
      </div>
    </>
  );
}
export default Musicbar;
