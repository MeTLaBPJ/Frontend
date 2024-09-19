import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import '../LoginPage/SignIn.css';  

// 메일 인증 / 작성
const Login1 = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Verification code sent to: ${email}`);
      navigate('/Login2');
    } else {
      console.log("Please enter a valid email");
    }
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className = "Login1Page">
      <header className="header">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />  
        </button>
      </header>  

      <div className="container">
        <h2 className="login-heading">학교 이메일을 입력해 주세요</h2>
        <p className="login-subtext">안전한 인피 활동을 위해 학교 인증이 필요해요</p>

        <form onSubmit={handleButtonClick}>
          <input 
            type="email" 
            placeholder="inu@inu.ac.kr" 
            value={email} 
            onChange={handleInputChange} 
            className="email-input"
            required // 이메일 입력 필수
          />
          <button className="bottom-Button" type="submit">
            인증번호 보내기 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;
