import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../LoginPage/Main.css';
import { IoChevronBack } from "react-icons/io5";
import male from '../LoginPage/boy.png';
import female from '../LoginPage/girl.png';
import axios from "axios";

// 성별 선택 컴포넌트
const Login5 = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNext = async () => {
    if (selectedGender) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/save-gender`, { gender: selectedGender });
        if (response.data.success) {
          navigate("/Login6");
        } else {
          alert("성별 저장에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("성별 저장 중 오류 발생:", error);
        alert("성별 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="start-page">

      <header>
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div>
        </div>
      </header>

      <div>
        <h2 className="login-heading">성별을 알려주세요</h2>

        <div className="login4-input img-con">
          <div
            className={`img-con-1 ${selectedGender === 'male' ? 'selected' : ''}`}
            onClick={() => handleGenderSelect('male')}
          >
            <img src={male} alt="Male" className="img" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          </div>
          <div
            className={`img-con-2 ${selectedGender === 'female' ? 'selected' : ''}`}
            onClick={() => handleGenderSelect('female')}
          >
            <img src={female} alt="Female" className="img" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <button
        className="bottom-Button"
        disabled={!selectedGender}
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
};

export default Login5;