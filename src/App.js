import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sign from "./pages/Sign/Sign.jsx";
import MainPage from "./pages/Main/MainPage.jsx";
import MyPage from "./pages/My/MyPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
