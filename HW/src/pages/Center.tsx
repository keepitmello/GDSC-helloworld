import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Center = () => {
  const [activeSection, setActiveSection] = useState("default"); // 기본값으로 'turkiye' 설정

  const renderContent = () => {
    switch (activeSection) {
      case "turkiye":
        // "튀르키예" 버튼 클릭 시 표시될 내용
        return (
          <div>
            <div
              style={{
                width: 186,
                height: 88,
                left: 407,
                top: 457,
                position: "absolute",
                textAlign: "center",
                color: "#FB2222",
                fontSize: 30,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              이글종합물류
              <br />
            </div>
            <div
              className="10720304306Ars01081465291"
              style={{
                width: 601,
                height: 160,
                left: 459,
                top: 893,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              | 발송주소: 인천시 중구 자유무역로 107번길 20, 304-306호
              <br />
              <br />| 받는이: 이글종합물류
              <br />
              <br />| ARS : 010-8146-5291 박찬영 전무
              <br />
              <br />
              <br />
            </div>
            <div
              style={{
                width: 869,
                height: 217,
                left: 278,
                top: 1139,
                position: "absolute",
                textAlign: "center",
                color: "#FFFBFB",
                fontSize: 30,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              ㅇ구호물품 발송 시 주의사항
            </div>
            <div
              style={{
                width: 580,
                height: 50,
                left: 410,
                top: 1101,
                position: "absolute",
                textAlign: "center",
                color: "#FF3737",
                fontSize: 40,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              구호물품 발송 시 주의사항
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        );

      case "paju":
        // "경인, 강원" 버튼 클릭 시 표시될 내용
        return <div>{/* 파주 재해구호물류 관련 정보 */}</div>;
      case "hamyang":
        // "제주, 전라, 경상, 충청" 버튼 클릭 시 표시될 내용
        return (
          <div
            style={{
              width: 1440,
              height: 1666,
              position: "relative",
              background: "white",
            }}
          >
            {/* 함양 재해구호물류 관련 정보 */}
            {/* 함양 구호물품 보관현황 관련 정보 */}
          </div>
        );
      default:
        return (
          <>
            <div
              style={{
                width: 152,
                height: 72,
                left: 118,
                top: 61,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 25,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              구호물품 <br />
              알리미
            </div>
            <div
              className="Rectangle9"
              style={{
                width: 1440,
                height: 201,
                left: 0,
                top: 159,
                position: "absolute",
                background: "#585555",
              }}
            />
            <img
              className="1"
              style={{
                width: 965,
                height: 199,
                left: 528,
                top: 159,
                position: "absolute",
              }}
              src="https://via.placeholder.com/965x199"
            />
            <div
              style={{
                width: 296,
                height: 90,
                left: 128,
                top: 245,
                position: "absolute",
                textAlign: "center",
                color: "white",
                fontSize: 30,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              재해 구호 물류센터
            </div>
            <div
              style={{
                width: 186,
                height: 88,
                left: 407,
                top: 457,
                position: "absolute",
                textAlign: "center",
                color: "#FB2222",
                fontSize: 30,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              이글종합물류
              <br />
            </div>
            <div
              className="Rectangle11"
              style={{
                width: 257,
                height: 211,
                left: 70,
                top: 584,
                position: "absolute",
                background: "#D9D7D7",
              }}
            />
            <div
              style={{
                width: 347,
                height: 38,
                left: 24,
                top: 614,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              튀르키예{" "}
            </div>
            <div
              style={{
                width: 347,
                height: 38,
                left: 25,
                top: 684,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              경인, 강원{" "}
            </div>
            <div
              style={{
                width: 347,
                height: 38,
                left: 24,
                top: 748,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              제주, 전라, 경상, 충청{" "}
            </div>
            <div
              className="Rectangle12"
              style={{
                width: 255,
                height: 70,
                left: 72,
                top: 584,
                position: "absolute",
                background: "rgba(134.58, 132.34, 132.34, 0.70)",
              }}
            />
            <img
              className="1"
              style={{
                width: 186,
                height: 196,
                left: 1073,
                top: 584,
                position: "absolute",
              }}
              src="https://via.placeholder.com/186x196"
            />
            <img
              className="1"
              style={{
                width: 558,
                height: 273,
                left: 421,
                top: 548,
                position: "absolute",
              }}
              src="https://via.placeholder.com/558x273"
            />
            <div
              className="10720304306Ars01081465291"
              style={{
                width: 601,
                height: 160,
                left: 459,
                top: 893,
                position: "absolute",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              | 발송주소: 인천시 중구 자유무역로 107번길 20, 304-306호
              <br />
              <br />| 받는이: 이글종합물류
              <br />
              <br />| ARS : 010-8146-5291 박찬영 전무
              <br />
              <br />
              <br />
            </div>
            <div
              style={{
                width: 869,
                height: 217,
                left: 278,
                top: 1139,
                position: "absolute",
                textAlign: "center",
                color: "#FFFBFB",
                fontSize: 30,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              ㅇ구호물품 발송 시 주의사항
            </div>
            <div
              className="AidMaterialTurkiye"
              style={{
                width: 1147,
                height: 178,
                left: 146,
                top: 1177,
                position: "absolute",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                눈/비가 많은 지역, 시기라 배송 중 오염을 막기 위해 비닐로
                포장해서 박스에 넣기
                <br />
                빠른 세관통과를 위해 박스 겉면에 ‘Aid Material / Turkiye’라고
                적기
                <br />
                빠른 분류를 위해 어떤 물품이 들어있는지 영어로 간략하게 내용을
                표기
                <br />
                이슬람국가라 식품류를 보낼 때 돼지고기 가공품은 피하기
                <br />
                식품 발송 시 유통기한/소비기한 넉넉한 제품으로 준비
              </span>
            </div>
          </>
        );
    }
  };

  return (
    <div>
      <button onClick={() => setActiveSection("turkiye")}>튀르키예</button>
      <button onClick={() => setActiveSection("paju")}>경인, 강원</button>
      <button onClick={() => setActiveSection("hamyang")}>
        제주, 전라, 경상, 충청
      </button>
      {renderContent()}
    </div>
  );
};

export default Center;
