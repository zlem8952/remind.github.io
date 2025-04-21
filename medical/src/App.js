import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <button className="hamburger">햄버거 버튼</button>
      <div className="top-menu">
        <button>병원 정보</button>
        <button>응급의료기관</button>
        <button>약국정보</button>
        <button>의약품 정보</button>
        <button>기관평가정보</button>
        <button>진료과목 정보</button>
      </div>
      <div className="photo-section">사진</div>
      <div className="info-section">
        <div className="info-card">병원 정보</div>
        <div className="info-card">응급의료기관</div>
        <div className="info-card">약국 정보</div>
      </div>
    </div>
  );
}

export default App;
