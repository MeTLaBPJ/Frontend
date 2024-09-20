import React, { useState } from "react";
import axios from "axios";
import '../LoginPage/Main.css';
import { IoChevronBack } from "react-icons/io5";

// 닉네임 설정 
const Login4 = ({ nextStep, prevStep, userData }) => {
  const [nickname, setNickname] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false); // 중복 확인 완료 상태
  const [nicknameStatus, setNicknameStatus] = useState("");

  const handleCheckNickname = async () => {
    if (nickname.length >= 2 && nickname.length <= 20) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/check-nickname`, { nickname });
        if (response.data.available) {
          setIsNicknameChecked(true);
          setNicknameStatus("사용 가능한 닉네임입니다.");
        } else {
          setIsNicknameChecked(false);
          setNicknameStatus("이미 사용 중인 닉네임입니다.");
        }
      } catch (error) {
        console.error("닉네임 중복 확인 중 오류 발생:", error);
        setIsNicknameChecked(false);
        setNicknameStatus("중복 확인 중 오류가 발생했습니다.");
      }
    } else {
      setIsNicknameChecked(false);
      setNicknameStatus("닉네임은 2자 이상, 20자 이하로 입력해주세요.");
    }
  };

  const handleNext = async () => {
    if (nickname.length >= 2 && nickname.length <= 20 && isNicknameChecked) {
      userData(nickname)
      nextStep()
    } else {
      alert("닉네임을 다시 확인해주세요.");
    }
  };

  const handleBack = () => {
    prevStep()
  };

  return (
    <div className="start-page">

      <header>
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "40%" }}></div>
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
            setNicknameStatus("");
          }}
        />

        <button className="check-button" onClick={handleCheckNickname}>
          중복 확인하기
        </button>

        {nicknameStatus && (
          <p className={`nickname-status  ${isNicknameChecked ? 'available' : 'unavailable'}`}>
            {nicknameStatus}
          </p>
        )}

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