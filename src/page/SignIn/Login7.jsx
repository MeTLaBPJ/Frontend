import React, { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import '../LoginPage/Main.css';

// 생년월일 입력
const Login7 = ({ finalHandleSubmit, prevStep, userData }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

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

    if (isValid) {
      userData(new Date(year, month - 1, day).toLocaleDateString())
      finalHandleSubmit()
    }
  };

  const handleBack = () => {
    prevStep()
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