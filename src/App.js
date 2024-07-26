import Sign from "./pages/Sign/Sign.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Sign />} />
      </Routes>
    </>
  );
}
export default App;
