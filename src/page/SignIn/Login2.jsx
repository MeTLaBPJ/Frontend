import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import '../LoginPage/Main.css';

// 메일 인증 / 인증번호 입력 
const Login2 = () => {
  const [code, setCode] = useState(new Array(6).fill("")); // 6자리 코드 입력 관리
  const navigate = useNavigate();

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

  const handleResend = () => {
    console.log("Verification code resent!");
  };

  const handleSubmit = () => {
    const enteredCode = code.join("");
    console.log(`Entered code: ${enteredCode}`);

    navigate("/Login3");
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