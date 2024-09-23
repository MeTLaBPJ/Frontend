import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { IoChevronBack } from "react-icons/io5"; 
import { UserContext } from "../../context/UserContext";
import './Login.css'; 

// 비밀번호 설정 페이지
const Login3 = () => {
  const { User, updateUser } = useContext(UserContext);
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); 

  const navigate = useNavigate(); 

  // 비밀번호 유효성 검사 함수
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(value);
  };

  // 비밀번호 입력 처리
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError("비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다");
    } else {
      setPasswordError("");
    }

    if (newPassword !== confirmPassword && confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다");
    } else {
      setConfirmPasswordError("");
    }
  };

  // 비밀번호 확인 입력 처리
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다");
    } else {
      setConfirmPasswordError("");
    }
  };

  // 뒤로 가기 처리
  const handleBack = () => {
    navigate('/login2'); 
  };

  // 제출 처리
  const handleSubmit = () => {
    if (!passwordError && !confirmPasswordError && password && confirmPassword) {
      updateUser({password: password});
      console.log("비밀번호 설정 완료:", password, User);
      navigate("/login4");
    } else {
      console.log("비밀번호 설정 오류");
    }
  };

  return (
    <div className="Login3Page">
      <header className="header">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />  
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "15%" }}></div>
        </div>
      </header>  

      <div className="container">
        <h2 className="login-heading">비밀번호를 설정해주세요</h2>
        <p className="login-subtext1">영문, 숫자, 특수문자를 조합하여 8자 이상으로 설정해주세요</p>

        <div className="input-container">
          <input
            type="password"
            className="password-input"
            placeholder="1234abc!"
            value={password}
            onChange={handlePasswordChange}
          />
          {/* 비밀번호 유효성 검사 에러 메시지 */}
          <p className={`error-message ${passwordError ? 'visible' : ''}`}>
            {passwordError}
          </p>
        </div>

        <label className="login-subtext2">다시 한번 입력해주세요</label>
        <div className="input-container">
          <input
            type="password"
            className="repassword-input"
            placeholder="1234abc!"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {/* 비밀번호 확인 에러 메시지 */}
          <p className={`error-message1 ${confirmPasswordError ? 'visible' : ''}`}>
            {confirmPasswordError}
          </p>
        </div>
    
        <button
          className="bottom-Button"
          onClick={handleSubmit}
          disabled={passwordError !== "" || confirmPasswordError !== "" || !password || !confirmPassword}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Login3;
