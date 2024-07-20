import "./App.css";
import Profile from "./component/Profile/Profile"; // 좌측 상단 프사, 이름 정보
import Character from "./component/Character/Character"; // 캐릭터 이미지, 이름
import Munulf from "./component/Munu_left/Munulf"; // 좌측 하단 메뉴
import Munu_right_popup from "./component/Popup/Munu_right_popup"; // 우측 하단 메뉴
import Musicbar from "./component/Musicbar/Musicbar"; // 하단 음악재생
import Nickname from "./component/Nickname/Nickname"; // 좌측 상단 이름 수정 파일

function App() {
  return (
    <>
      <Profile /> {/* 좌측 상단 프사, 이름 정보*/}
      <Character /> {/* 캐릭터 이미지, 이름 */}
      <Munulf /> {/* 좌측 하단 메뉴 */}
      <Musicbar /> {/* 하단 음악재생 */}
      <Nickname /> {/* 좌측 상단 이름 수정 파일 */}
      <Munu_right_popup /> {/* 우측 하단 메뉴 */}
    </>
  );
}
export default App;
