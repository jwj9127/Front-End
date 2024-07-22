import "./App.css";
import Profile from "./commponent/Profile/Profile"; // 좌측 상단 프사, 이름 정보
import Character from "./commponent/Character/Character"; // 캐릭터 이미지, 이름
import MenuLeft from "./commponent/MunuLeft/MenuLeft"; // 좌측 하단 메뉴
import MenuRightPopup from "./commponent/MenuRightPopup/MenuRightPopup"; // 우측 하단 메뉴
import Musicbar from "./commponent/Musicbar/Musicbar"; // 하단 음악재생
import Nickname from "./commponent/Nickname/Nickname"; // 좌측 상단 이름 수정 파일

function App() {
  return (
    <>
      <Profile /> {/* 좌측 상단 프사, 이름 정보*/}
      <Character /> {/* 캐릭터 이미지, 이름 */}
      <MenuLeft /> {/* 좌측 하단 메뉴 */}
      <Musicbar /> {/* 하단 음악재생 */}
      <Nickname /> {/* 좌측 상단 이름 수정 파일 */}
      <MenuRightPopup /> {/* 우측 하단 메뉴 */}
    </>
  );
}

export default App;
