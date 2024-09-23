import React from "react";
import { useNavigate } from 'react-router-dom';
import './Main.css'
import mainImage from '../../asset/main.png';  
import mainLogo from '../../asset/logo.png';   
import subLogo from '../../asset/sublogo.png'; 

// 시작화면
function Main(){
    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleButtonClick = () => {
      navigate('../Login1');  // '/next' 경로로 이동
    };

    return (
      <div className="MainPage">
        <div className="container">
        <div>
          <img className="img-title" src={mainLogo} alt="mainlogo" />
        </div>
  
        <div>
          <img className="img-bg" src={mainImage} alt="Main Background" />
        </div>
  
        <div>
          <img className="img-subtitle" src={subLogo} alt="sublogo" />
        </div>
  
  
        <div>
          <button className="bottom-Button" onClick={handleButtonClick}>
            시작하기
          </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Main;