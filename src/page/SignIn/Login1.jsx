import axios from 'axios';
import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import '../LoginPage/Main.css';

const Login1 = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.endsWith("@inu.ac.kr")) {
      setIsLoading(true);
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/sign-up/email`, null, {
          params: { email: email }
        });
        sessionStorage.setItem('userEmail', email);
        console.log("Email stored in session storage:", sessionStorage.getItem('userEmail'));
        navigate('/Login2');
        if (response.data.success) {
          console.log(`Verification code sent to: ${email}`);
          
           // 저장 확인
          
        } else {
          setError("서버에 문제가 발생했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setError("서버와의 통신 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("올바른 학교 이메일(@inu.ac.kr)을 입력해주세요.");
    }
  };

  const handleBack = () => {
    navigate(-1);
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
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button className="bottom-Button" type="submit" disabled={isLoading}>
            {isLoading ? "전송 중..." : "인증번호 보내기"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;