import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate 추가
import { IoChevronBack } from "react-icons/io5";
import '../Main/Main.css';  // CSS 파일 import

// 생년월일 입력
const Login7 = () => {
  const { state } = useLocation(); // 전달받은 성별 정보
  const { gender } = state || {};
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate(); // navigate 초기화

  const handleSubmit = (e) => {
    e.preventDefault();

    // 기본적인 유효성 검사
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
      alert("생년월일을 정확히 입력해 주세요.");
      return;
    }
    console.log("생일:", `${year}-${month}-${day}`);
    // 다음 페이지로 이동하는 코드 추가 필요
    // navigate('/다음페이지', { state: { year, month, day, gender } });
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div>
      <header className="header">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />  
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "80%" }}></div>
        </div>
      </header>
      <h2 className="login-heading">춘식이님의 생일을 알려주세요</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <input
              type="text"
              maxLength="4"
              placeholder="YYYY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="year-input"
            />
            <input
              type="text"
              maxLength="2"
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="month-input"
            />
            <input
              type="text"
              maxLength="2"
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="day-input"
            />
        </div>

        <button type="submit" className="bottom-Button">
          다음
        </button>
      </form>
    </div>
  );
};

export default Login7;
