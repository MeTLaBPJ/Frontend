import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import '../LoginPage/Main.css';
import axios from 'axios';

// 메일 인증 / 인증번호 입력 
const Login2 = ({ nextStep, prevStep, userData }) => {
  const [code, setCode] = useState(new Array(6).fill("")); // 6자리 코드 입력 관리
  const [error, setError] = useState(""); // 에러 상태 추가
  const userEmail = sessionStorage.getItem('userEmail');

  const handleInputChange = (element, index) => {
    if (isNaN(element.value)) return; // 숫자가 아닌 경우 무시
    let newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    // 다음 입력으로 포커스 이동
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleResend = async () => {
    try {
      // 서버에 인증번호 재전송 요청
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/sign-up/email?email=${userEmail}`);
      if (response.status === 200) {
        alert("인증번호가 재전송되었습니다."); // 알림창 표시
        setError(""); // 성공 시 에러 메시지 초기화
      } else {
        setError("인증번호 재전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error resending verification code:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요."); // 알림창 표시
    }

  };

  const handleSubmit = async () => {
    const enteredCode = code.join("");
    if (enteredCode.length !== 6) {
      setError("인증번호 6자리를 모두 입력해주세요.");
      return;
    }

    try {
      // 서버에 인증번호 검증 요청
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/sign-up/email/check`, {
        email: userEmail,
        key: enteredCode
      });

      if (response.status === 200) {
        nextStep()
      } else {
        setError("잘못된 인증번호입니다. 다시 확인해주세요.");
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setError("오류가 발생했습니다. 다시 시도해주세요.");
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
      </header>

      <div>
        <h2 className="login-heading">인증 메일이 보내졌습니다</h2>
        <p className="login-subtext">인증 번호 6자리를 입력해주세요</p>

        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="code-input"
              value={digit}
              onChange={(e) => handleInputChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지 표시 */}

        <p className="resend">
          메일을 못받으셨나요? &nbsp;
          <span className="resend-link" onClick={handleResend}>다시 받기</span>
        </p>

        <button className="bottom-Button" onClick={handleSubmit}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Login2;