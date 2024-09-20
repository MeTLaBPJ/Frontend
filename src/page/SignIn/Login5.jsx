import React, { useState } from "react";
import '../LoginPage/Main.css';
import { IoChevronBack } from "react-icons/io5";
import male from '../LoginPage/boy.png';
import female from '../LoginPage/girl.png';

// 성별 선택 컴포넌트
const Login5 = ({ nextStep, prevStep, userData }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNext = async () => {
    if (selectedGender) {
      userData(selectedGender);
      nextStep();
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