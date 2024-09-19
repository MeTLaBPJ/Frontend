import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import axios from 'axios';
import '../LoginPage/Main.css';

// 생년월일 입력
const Login7 = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate(); // navigate 초기화

  useEffect(() => {
    const validateInput = () => {
      if (!year || !month || !day) {
        setIsValid(false);
        return;
      }

      const yearNum = parseInt(year, 10);
      const monthNum = parseInt(month, 10);
      const dayNum = parseInt(day, 10);

      const isValidYear = yearNum >= 1900 && yearNum <= new Date().getFullYear();
      const isValidMonth = monthNum >= 1 && monthNum <= 12;
      const isValidDay = dayNum >= 1 && dayNum <= 31;

      setIsValid(
        year.length === 4 &&
        month.length === 2 &&
        day.length === 2 &&
        isValidYear &&
        isValidMonth &&
        isValidDay
      );
    };

    validateInput();
  }, [year, month, day]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 빈 칸 검사
    if (!year || !month || !day) {
      setError("모든 필드를 입력해 주세요.");
      return;
    }

    // 유효성 검사
    if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
      setError("생년월일을 정확히 입력해 주세요. (YYYY-MM-DD 형식)");
      return;
    }

    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);

    if (yearNum < 1900 || yearNum > new Date().getFullYear()) {
      setError("올바른 연도를 입력해 주세요.");
      return;
    }

    if (monthNum < 1 || monthNum > 12) {
      setError("올바른 월을 입력해 주세요. (01-12)");
      return;
    }

    if (dayNum < 1 || dayNum > 31) {
      setError("올바른 일을 입력해 주세요. (01-31)");
      return;
    }

    console.log("생일:", `${year}-${month}-${day}`);
    // 다음 페이지로 이동하는 코드 추가 필요
    // navigate('/다음페이지', { state: { year, month, day, gender } });

    if (isValid) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/save-birthdate`, {
          birthdate: `${year}-${month}-${day}`
        });
        console.log("서버 응답:", response.data);

        // 로컬 스토리지에 유저 닉네임 저장
        localStorage.setItem('userNickname', response.data.nickname);

        // 성공 시 다음 페이지로 이동
        navigate('/');
      } catch (error) {
        navigate('/');
        console.error("서버 요청 실패:", error);
        setError("서버 요청 중 오류가 발생했습니다.");
      }
    }
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="start-page">
      <header className="header">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}></div>
        </div>
      </header>
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
        {error && <div className="error-message">{error}</div>}
        <button
          type="submit"
          className={`bottom-Button ${!isValid ? 'disabled' : ''}`}
          disabled={!isValid}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default Login7;