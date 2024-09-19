import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate 추가
import { IoChevronBack } from "react-icons/io5";
import '../LoginPage/SignIn.css';  

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
    
    const birthdate = `${year}-${month}-${day}`;
    console.log("생일:", birthdate);

    // Login8 페이지로 이동하면서 state에 생년월일과 성별을 함께 전달
    navigate('/Login8', { state: { birthdate, gender } });
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="Login7Page">
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
        <div className = "year-month-day-container">
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
