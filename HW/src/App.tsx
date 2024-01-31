import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Center from "./pages/Center"; // Center 컴포넌트를 import합니다.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/center/:section" element={<Center />} />{" "}
        {/* Center 컴포넌트에 대한 경로를 추가합니다. */}
        {/* 기타 라우트 */}
      </Routes>
    </Router>
  );
}

export default App;
