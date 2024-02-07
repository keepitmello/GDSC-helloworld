import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행될 코드
    console.log('Component did mount');

    return () => {
      // 컴포넌트가 언마운트될 때 실행될 정리(clean-up) 코드
      console.log('Component will unmount');
    };
  }, []); // 의존성 배열이 빈 경우, 컴포넌트가 마운트될 때 한 번만 실행됨

  return <div>Hello, World!</div>;
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./images/main1.jpg",
    "./images/main2.png",
    "./images/main3.png",
    "./images/main4.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="Main"
      style={{
        width: 1440,
        height: 1800,
        position: "relative",
        background: "white",
      }}
    >
      <div
        className="Rectangle46"
        style={{
          width: 1440,
          height: 734,
          left: 0,
          top: 895,
          position: "absolute",
          background: "#EEECEC",
        }}
      />
      <div
        className="Rectangle2"
        style={{
          width: 1440,
          height: 476,
          left: 0,
          top: 157,
          position: "absolute",
          background: "#292828",
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt="Main display"
          style={{ width: "100%", height: "100%" }}
        />
        <button
          onClick={prevImage}
          style={
            {
              /* 스타일 설정 */
            }
          }
        >
          {"<"}
        </button>
        <button
          onClick={nextImage}
          style={
            {
              /* 스타일 설정 */
            }
          }
        >
          {">"}
        </button>
      </div>
      <div
        onClick={() => navigate("/")}
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
          cursor: "pointer",
        }}
      >
        구호물품 알리미
      </div>
      <div
        className="Line1"
        style={{
          width: 1460.01,
          height: 0,
          left: -20,
          top: 161,
          position: "absolute",
          border: "3px #F12F2F solid",
        }}
      ></div>
      <div
        className="Line6"
        style={{
          width: 1460.01,
          height: 0,
          left: -20,
          top: 161,
          position: "absolute",
          border: "3px #F12F2F solid",
        }}
      ></div>
      <div
        className="Rectangle1"
        style={{
          width: 1440,
          height: 35,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#F6F6F6",
        }}
      />
      <div
        onMouseOver={() => setIsDropdownVisible(true)}
        onMouseLeave={() => setIsDropdownVisible(false)}
        style={{
          width: 224,
          height: 32,
          left: 270,
          top: 82,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        재해구호 물류센터{" "}
        {isDropdownVisible && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "100%",
              background: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px 0",
              zIndex: 1000,
            }}
          >
            <div
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => handleNavigate("/center/turkiye")}
            >
              이글종합물류
            </div>
            <div
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => handleNavigate("/center/paju")}
            >
              파주 재해구호물류
            </div>
            <div
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => handleNavigate("/center/hamyang")}
            >
              함양 재해구호물류
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => navigate("/support")}
        style={{
          width: 224,
          height: 32,
          left: 538,
          top: 80,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          cursor: "pointer",
        }}
      >
        구호물품 지원
      </div>
      <div
        onClick={() => navigate("/emergency")}
        style={{
          width: 224,
          height: 32,
          left: 812,
          top: 78,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          cursor: "pointer",
        }}
      >
        각국 긴급지원
      </div>
      <div
        onClick={() => navigate("/volunteer")}
        style={{
          width: 224,
          height: 32,
          left: 1018,
          top: 78,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          cursor: "pointer",
        }}
      >
        자원봉사
      </div>
      <img
        className="1"
        style={{
          width: 1008,
          height: 422,
          left: 228,
          top: 184,
          position: "absolute",
          borderRadius: 23,
        }}
        src="./images/main1.jpg"
      />
      <div
        className="Line2"
        style={{
          width: 47.73,
          height: 0,
          left: 85,
          top: 399.49,
          position: "absolute",
          transform: "rotate(-46.26deg)",
          transformOrigin: "0 0",
          border: "4px #FFFEFE solid",
        }}
      ></div>
      <div
        className="Line3"
        style={{
          width: 42.97,
          height: 0,
          left: 85,
          top: 399.49,
          position: "absolute",
          transform: "rotate(39.82deg)",
          transformOrigin: "0 0",
          border: "4px #FFFEFE solid",
        }}
      ></div>
      <div
        className="Line4"
        style={{
          width: 47.73,
          height: 0,
          left: 1386.22,
          top: 392.8,
          position: "absolute",
          transform: "rotate(138.18deg)",
          transformOrigin: "0 0",
          border: "4px #FFFEFE solid",
        }}
      ></div>
      <div
        className="Line5"
        style={{
          width: 42.97,
          height: 0,
          left: 1386.22,
          top: 392.8,
          position: "absolute",
          transform: "rotate(-135.74deg)",
          transformOrigin: "0 0",
          border: "4px #FFFEFE solid",
        }}
      ></div>
      <div
        className="Rectangle3"
        style={{
          width: 372,
          height: 392,
          left: 248,
          top: 204,
          position: "absolute",
          background: "rgba(75.22, 76.19, 76.50, 0.50)",
        }}
      />
      <div
        style={{
          width: 580,
          height: 217,
          left: 144,
          top: 274,
          position: "absolute",
          textAlign: "center",
          color: "#FFFAFA",
          fontSize: 40,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        튀르키예 지진 피해
        <br />
        긴급 구호 및 지원
        <br />
      </div>
      <div
        style={{
          width: 606,
          height: 92,
          left: 175,
          top: 393,
          position: "absolute",
          textAlign: "center",
          color: "#FFF9F9",
          fontSize: 25,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        당신의 도움이 필요합니다
      </div>
      <div
        className="Rectangle4"
        style={{
          width: 224,
          height: 34,
          left: 386,
          top: 457,
          position: "absolute",
        }}
      ></div>
      <div
        className="Rectangle5"
        style={{
          width: 112,
          height: 36,
          left: 478,
          top: 457,
          position: "absolute",
          background: "#F52E2E",
        }}
      />
      <div
        style={{
          width: 174,
          height: 34,
          left: 446,
          top: 468,
          position: "absolute",
          textAlign: "center",
          color: "#FFFAFA",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        자세히보기
      </div>
      <div
        className="Rectangle6"
        style={{
          width: 1440,
          height: 80,
          left: 0,
          top: 635,
          position: "absolute",
          background: "#EDEAEA",
        }}
      />
      <div
        style={{
          width: 820,
          height: 112,
          left: 322,
          top: 659,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 25,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        사랑과 따뜻한 마음으로 올바른 구호물품을 전달합니다.
      </div>
      <div
        className="Rectangle7"
        style={{
          width: 1440,
          height: 171,
          left: 0,
          top: 1629,
          position: "absolute",
          background: "#F6F6F6",
        }}
      />
      <div
        style={{
          width: 152,
          height: 72,
          left: 122,
          top: 1674,
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
        className="01012345678"
        style={{
          width: 341,
          height: 88,
          left: 431,
          top: 1674,
          position: "absolute",
          color: "black",
          fontSize: 25,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        연락처
        <br />
        010-1234-5678
      </div>
      <div
        className="Line36"
        style={{
          width: 130,
          height: 0.74,
          left: 354.24,
          top: 1649,
          position: "absolute",
          transform: "rotate(90.33deg)",
          transformOrigin: "0 0",
          border: "1px #A19B9B solid",
        }}
      ></div>
      <div
        className="Line37"
        style={{
          width: 128,
          height: 0,
          left: 761,
          top: 1651,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "0 0",
          border: "1px #A19B9B solid",
        }}
      ></div>
      <div
        className="SungkonghoeUniversityGoogleSolutionChallenge2024"
        style={{
          width: 462,
          height: 118,
          left: 848,
          top: 1680,
          position: "absolute",
          color: "black",
          fontSize: 25,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        SUNGKONGHOE UNIVERSITY
        <br />
        Google Solution Challenge 2024
      </div>
      <div
        style={{
          width: 112,
          height: 15,
          left: 1293,
          top: 10,
          position: "absolute",
          color: "black",
          fontSize: 12,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        로그인 · 회원가입
      </div>
      <div
        className="Rectangle19"
        style={{
          width: 144,
          height: 42,
          left: 1236,
          top: 73,
          position: "absolute",
          background: "#E16C6C",
        }}
      ></div>
      <div
        style={{
          width: 107,
          height: 29,
          left: 1277,
          top: 83,
          position: "absolute",
          color: "white",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        질문하기
      </div>
      <div
        className="QA"
        style={{
          width: 156,
          height: 76,
          left: 33,
          top: 931,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 25,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Q & A
      </div>
      <div
        className="Line78"
        style={{
          width: 1335,
          height: 0,
          left: 54,
          top: 979,
          position: "absolute",
          border: "2px #828181 solid",
        }}
      ></div>
      <div
        className="Line79"
        style={{
          width: 1202.01,
          height: 0,
          left: 121,
          top: 1187.01,
          position: "absolute",
          border: "2px #D9D9D9 solid",
        }}
      ></div>
      <div
        style={{
          width: 412,
          height: 55,
          left: 144,
          top: 1028,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        튀르키예 구호물품 보내려고합니다.
      </div>
      <div
        className="2010"
        style={{
          width: 754,
          height: 36,
          left: 144,
          top: 1069,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        튀르키예 구호물품 보내려고합니다. 터키 공식 후원업체에서 더 이상 물량을
        받지 않는다고 합니다ㅠ 개인적으로 선박이나 항공편으로 보내려고하는데
        비용과 시간이 궁금해서요. 참고로 규모는, 20키로 10박스입니다.{" "}
      </div>
      <div
        className="020240104"
        style={{
          width: 176,
          height: 20,
          left: 1140,
          top: 1127,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        댓글 0 2024.01.04{" "}
      </div>
      <div
        className="Line81"
        style={{
          width: 1202.01,
          height: 0,
          left: 116,
          top: 1603.01,
          position: "absolute",
          border: "2px #D9D9D9 solid",
        }}
      ></div>
      <div
        style={{
          width: 412,
          height: 55,
          left: 144,
          top: 1441,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        튀르키예 구호물품 보내려고 합니다.
      </div>
      <div
        className="2010"
        style={{
          width: 754,
          height: 36,
          left: 144,
          top: 1482,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        튀르키예 구호물품 보내려고 합니다. 터키공식후원업체에서 더 이상 물량을
        받지 않는다고합니다ㅠ 개인적으로 선박이나 항공편으로 보내려고하는데
        비용과 시간이 궁금해서요. 참고로 규모는, 20키로 10박스입니다.{" "}
      </div>
      <div
        className="020240104"
        style={{
          width: 176,
          height: 20,
          left: 1142,
          top: 1540,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        댓글 0 2024.01.04{" "}
      </div>
      <div
        className="Line80"
        style={{
          width: 1202.01,
          height: 0,
          left: 121,
          top: 1402.01,
          position: "absolute",
          border: "2px #D9D9D9 solid",
        }}
      ></div>
      <div
        style={{
          width: 412,
          height: 55,
          left: 144,
          top: 1230,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        튀르키예 옷 기부시, 개별 포장 해야하나요?{" "}
      </div>
      <div
        style={{
          width: 754,
          height: 36,
          left: 144,
          top: 1271,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        안녕하세요 아동복 매장을 운영중이며 새 옷을 기부 하려는데 개별 포장
        해야할까요? 더불어 금액이 아닌 물품은 기부금 영수증 처리 되나요?{" "}
      </div>
      <div
        className="020240104"
        style={{
          width: 176,
          height: 20,
          left: 1140,
          top: 1346,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        댓글 0 2024.01.04{" "}
      </div>
      <div
        style={{
          width: 111,
          height: 24,
          left: 1316,
          top: 916,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        +
      </div>
      <div
        style={{
          width: 314,
          height: 26,
          left: 68,
          top: 721,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        구호물품 관련 기관 바로가기{" "}
      </div>
    </div>
  );
}
export default MainPage;
