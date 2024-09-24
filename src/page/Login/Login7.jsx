import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import { IoChevronBack } from "react-icons/io5";
import { UserContext } from "../../context/UserContext";
import { postUser } from "../../api/postUser";
import './Login.css'; 

// 생년월일 입력
const Login7 = () => {
  const { User, updateUser } = useContext(UserContext);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate(); // navigate 초기화

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const validateBirthdate = (year, month, day) => {
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
      alert("생년월일을 정확히 입력해 주세요.");
      return false;
    }

    // 형식 체크
    if (!/^\d{4}$/.test(year) || !/^\d{2}$/.test(month) || !/^\d{2}$/.test(day)) {
      alert("생년월일은 숫자만 포함해야 합니다.");
      return false;
    }

    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);

    // 월 범위 체크
    if (monthNum < 1 || monthNum > 12) {
      alert("월은 1에서 12 사이의 숫자여야 합니다.");
      return false;
    }

    // 각 월에 따라 최대 일수 체크
    const daysInMonth = [31, (isLeapYear(yearNum) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (dayNum < 1 || dayNum > daysInMonth[monthNum - 1]) {
      alert("입력한 날짜는 유효하지 않습니다.");
      return false;
    }
    const birthdate = `${year}-${month}-${day}`;
    updateUser({ birthday:birthdate});
    console.log("생일:", birthdate);
    return true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateBirthdate(year, month, day)) {
      return;
    }
    
    try {
      await postUser(User);
      console.log('user data posted successfully');
     navigate('/login');
    } catch (error) {
      console.error('Error posting user data:', error);
    }
    

  };

  const handleBack = () => {
    navigate('/login6'); // 이전 페이지로 이동
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

      <div className="container">
      <h2 className="login-heading">춘식이님의 생일을 알려주세요</h2>
      <form onSubmit={handleSubmit}>
        <div className="year-month-day-container">
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
    </div>
  );
};

export default Login7;
