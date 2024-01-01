import { useState } from 'react';
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import './App.css';

const App: FunctionComponent = () => {
  return (
    <div className="main">
      <section className="main-child" />
      <div className="div">
        <p className="p">{`구호물품 `}</p>
        <p className="p">알리미</p>
      </div>
      <img className="main-item" alt="" src="/line-1@2x.png" />
      <img className="main-item" alt="" src="/line-6@2x.png" />
      <div className="rectangle-div" />
      <div className="div1">{`재해구호 물류센터 `}</div>
      <div className="div2">구호물품 지원</div>
      <div className="div3">{`각국 긴급지원 `}</div>
      <div className="div4">자원봉사</div>
      <img className="icon" alt="" src="/-1@2x.png" />
      <img className="line-icon" alt="" src="/line-2@2x.png" />
      <img className="main-child1" alt="" src="/line-3@2x.png" />
      <img className="main-child2" alt="" src="/line-4@2x.png" />
      <img className="main-child3" alt="" src="/line-5@2x.png" />
      <div className="main-child4" />
      <b className="b">
        <p className="p">튀르키예 지진 피해</p>
        <p className="p">긴급 구호 및 지원</p>
      </b>
      <b className="b1">당신의 도움이 필요합니다</b>
      <img className="rectangle-icon" alt="" src="/rectangle-4@2x.png" />
      <div className="main-child5" />
      <b className="b2">자세히보기</b>
      <div className="main-child6" />
      <div className="div5">
        사랑과 따뜻한 마음으로 올바른 구호물품을 전달합니다.
      </div>
      <div className="main-child7" />
      <div className="main-child8" />
      <div className="main-child9" />
      <div className="div6">자주 묻는 질문</div>
      <div className="div7">
        <p className="p">{`구호물품 `}</p>
        <p className="p">알리미</p>
      </div>
      <div className="div8">
        <p className="p">연락처</p>
        <p className="p">010-1234-5678</p>
      </div>
      <img className="main-child10" alt="" src="/line-36@2x.png" />
      <img className="main-child11" alt="" src="/line-37@2x.png" />
      <div className="sungkonghoe-university-google-container">
        <p className="p">SUNGKONGHOE UNIVERSITY</p>
        <p className="p">Google Solution Challenge 2024</p>
      </div>
      <div className="div9">로그인 · 회원가입</div>
    </div>
  );
};

export default App;
