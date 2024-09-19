import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import '../LoginPage/SignIn.css';  

const Login8 = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate('/Mbti1'); // 다음 페이지로 이동
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="Login8Page">
      <header className="header">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />  
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}></div>
        </div>
      </header>

      <h2 className="login-heading">춘식이님의 성격을 알려주세요</h2>
      <p className="login-subtext">몇 가지 질문에 대한 답변을 선택해주세요</p>
      <button className="bottom-Button" onClick={handleStartTest}>
        테스트 시작하기
      </button>
    </div>
  );
};

export default Login8;
