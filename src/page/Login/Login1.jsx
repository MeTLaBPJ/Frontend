import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { IoChevronBack } from "react-icons/io5"; 
import { postMail } from "../../api/postMail";
import './Login.css';  
import { UserContext } from "../../context/UserContext";

// 메일 인증 / 작성
const Login1 = () => {
  const { User, updateUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Verification code sent to: ${email}`);
      updateUser({ schoolEmail: email });
      console.log("context updated");

      // 이메일을 로컬 스토리지에 저장
      localStorage.setItem('userEmail', email);
      console.log("Email saved to localStorage");

    } else {
      console.log("Please enter a valid email");
      return; // 유효하지 않은 이메일일 경우 함수 종료
    }

    try {
      await postMail(email);
      console.log('email data posted successfully');
      navigate('/login2');
    } catch (error) {
      console.error('Error posting email data:', error);
    }
  };

  const handleBack = () => {
    navigate('/'); // 이전 페이지로 이동
  };

  return (
    <div className="Login1Page">
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
