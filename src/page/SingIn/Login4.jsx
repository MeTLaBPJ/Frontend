import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../LoginPage/SignIn.css';   
import { IoChevronBack } from "react-icons/io5";

// 닉네임 설정 
const Login4 = () => {
  const [nickname, setNickname] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false); // 중복 확인 완료 상태
  const navigate = useNavigate(); 

  const handleCheckNickname = () => {
    if (nickname.length >= 2 && nickname.length <= 20) {
      // 닉네임 중복 확인 로직이 들어가는 부분
      setIsNicknameChecked(true); // 중복 확인 완료
      alert("닉네임 확인 완료");
    } else {
      setIsNicknameChecked(false); // 중복 확인 실패 시 버튼 비활성화 유지
      alert("닉네임은 2자 이상, 20자 이하로 입력해주세요.");
    }
  };

  const handleNext = () => {
    if (nickname.length >= 2 && nickname.length <= 20 && isNicknameChecked) {
      navigate("/Login5", { state: { nickname } });
    } else {
      alert("닉네임을 다시 확인해주세요.");
    }
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className = "Login4Page">
        <header>
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />  
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "35%" }}></div>
        </div>
      </header>  
      <header>
        <button className="back-button" onClick={handleBack}> 
          <IoChevronBack />  
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "30%" }}></div>
        </div>
      </header>

      <div>
        <h2 className="login-heading">닉네임을 입력해주세요</h2>
        <p className="login-subtext">한글로만 2자 이상, 20자 이하로 가능해요</p>
        
        <input
          className="login4-input"
          type="text"
          placeholder="춘식이"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            setIsNicknameChecked(false); // 닉네임이 변경될 때마다 중복 확인 초기화
          }}
        />

        <button className="check-button" onClick={handleCheckNickname}>
          중복 확인하기
        </button>

        <button 
          className="bottom-Button" 
          disabled={nickname.length < 2 || !isNicknameChecked} // 중복 확인 완료 상태를 확인
          onClick={handleNext} 
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Login4;
