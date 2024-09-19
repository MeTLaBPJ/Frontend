import axios from 'axios';
import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import '../LoginPage/Main.css';

const Login2 = () => {
  const [code, setCode] = useState(new Array(8).fill(""));
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const userEmail = sessionStorage.getItem('userEmail');

  const handleInputChange = (element, index) => {
    const value = element.value;
    if (!/^[A-Za-z0-9]$/.test(value) && value !== '') return;

    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (element.nextSibling && value) {
      element.nextSibling.focus();
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/sign-up/email`, null, {
        params: { email: userEmail }
      });
      if (response.data.success) {
        setError("");
      } else {
        setError("인증번호 재전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error resending verification code:", error);
      setError("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    const enteredCode = code.join("");
    if (enteredCode.length !== 8) {
      setError("인증번호 8자리를 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/sign-up/email/check`, {
        email: userEmail,
        key: enteredCode
      });
      if (response.status === 200 && response.data) {
        navigate("/Login3");
      } else {
        setError("잘못된 인증번호입니다. 다시 확인해주세요.");
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setError("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
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

      <div>
        <h2 className="login-heading">인증 메일이 보내졌습니다</h2>
        <p className="login-subtext">인증 번호 8자리를 입력해주세요</p>

        <div className="code-inputs">
          {code.map((char, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="code-input"
              value={char}
              onChange={(e) => handleInputChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        {error && <p className="error-message">{error}</p>}

        <p className="resend">
          메일을 못받으셨나요? &nbsp;
          <span className="resend-link" onClick={handleResend}>다시 받기</span>
        </p>

        <button className="bottom-Button" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "확인 중..." : "다음"}
        </button>
      </div>
    </div>
  );
};

export default Login2;