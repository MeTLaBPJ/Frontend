import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import '../LoginPage/Main.css';
import axios from 'axios';


const Login1 = ({ nextStep, userData }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // 에러 메시지를 위한 상태 추가
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // 입력이 변경될 때마다 에러 메시지 초기화
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.endsWith("@inu.ac.kr")) {
      setIsLoading(true);
      userData(email)
      nextStep();


      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/send-email`, { email });
        if (response.data.success) {
          console.log(`Verification code sent to: ${email}`);
          sessionStorage.setItem('userEmail', email);
          navigate('/Login2');
        } else {
          setError("서버에 문제가 발생했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        setError("서버와의 통신 중 오류가 발생했습니다.");
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("올바른 학교 이메일(@inu.ac.kr)을 입력해주세요.");
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
      </header>

      <div className="container">
        <h2 className="login-heading">학교 이메일을 입력해 주세요</h2>
        <p className="login-subtext">안전한 인피 활동을 위해 학교 인증이 필요해요</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="inu@inu.ac.kr"
            value={email}
            onChange={handleInputChange}
            className="email-input"
            required // 이메일 입력 필수
          />
          {error && <p className="error-message">{error}</p>} {/* 에러 메시지 표시 */}
          <button className="bottom-Button" type="submit" disabled={isLoading}>
            {isLoading ? "전송 중..." : "인증번호 보내기"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;