import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="mypage">
        <div className="box1">
          <div className="profile"></div> {/* 프로필 정보 기본 레이아웃 */}
        </div>
        <div className="box5">
          <div className="profile_photo_change">설정</div>
          {/* 프로필 사진 수정 버튼 */}
        </div>
        <div className="box2">
          <div className="photo"></div> {/* 프로필 사진 */}
        </div>
        <div className="box3">
          <div className="nickname"></div> {/* 프로필 이름 레이아웃 */}
        </div>
      </div>
    </>
  );
}

export default Profile;
