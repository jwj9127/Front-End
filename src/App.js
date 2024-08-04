import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Sign from "./pages/Sign/Sign.jsx";
import MainPage from "./pages/Main/MainPage.jsx";
import Youtube from './component/Youtube/Youtube.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Sign />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/musicpage' element={<Youtube />} />
      </Routes>
    </>
  );
}
export default App;
