import React from "react";
import './Main.css'
import { useNavigate } from 'react-router-dom';
import mainImage from './main.png';
import mainLogo from './logo.png';
import subLogo from './sublogo.png';

// 시작화면
function Main() {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const handleButtonClick = () => {
    navigate('../Login1');  // '/next' 경로로 이동
  };


  return (
    <div className="start-page">
      <div>
        <img className="img-subtitle" src={subLogo} />
      </div>

      <div>
        <img className="img-title" src={mainLogo} />
      </div>

      <div>
        <img className="img-bg" src={mainImage} alt="Main Background" />
      </div>

      <div>
        <button className="bottom-Button" onClick={handleButtonClick}>
          시작하기
        </button>
      </div>
    </div>
  )
}

export default Main;