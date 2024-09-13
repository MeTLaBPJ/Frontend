import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { IoChevronBack } from "react-icons/io5";
import '../Main/Main.css'; 
import boyImage from '../Main/boy.png';
import girlImage from '../Main/girl.png';

// 성별 입력
const Login5 = () => {
  const [selectedGender, setSelectedGender] = useState(null); 
  const navigate = useNavigate(); 

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleSubmit = () => {
    if (selectedGender) {
      console.log(`선택된 성별: ${selectedGender}`);
      navigate('/Login6', { state: { gender: selectedGender } });
    }
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div>
      <header>
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />  
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "50%" }}></div>
        </div>
      </header>  
      <h2 className="login-heading">춘식이님의 성별을 알려주세요</h2>
      <div className="gender-options">
        <div className="rectangle"> 
          <div
            className={`gender-option ${selectedGender === '남성' ? 'selected' : ''}`}
            onClick={() => handleGenderSelect('남성')}
          >
            <img className="boy-image" src={boyImage} alt="Boy-Gender" />
            <p className="boyplace">남성</p>
          </div>
        </div>
        <div className="rectangle1">
          <div
            className={`gender-option ${selectedGender === '여성' ? 'selected' : ''}`}
            onClick={() => handleGenderSelect('여성')}
          >
            <img className="girl-image" src={girlImage} alt="Girl-Gender" />
            <p className="girlplace">여성</p>
          </div>
        </div>
      </div>
      <button
        className="bottom-Button"
        onClick={handleSubmit} // 버튼 클릭 시 제출
        disabled={!selectedGender} // 성별이 선택되지 않으면 버튼 비활성화
        style={{ backgroundColor: selectedGender ? '#FF6B9A' : '#E0E0E0' }} // 선택에 따라 버튼 색상 변경
      >
        다음
      </button>
    </div>
  );
};

export default Login5;
