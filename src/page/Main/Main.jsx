import React from "react";
import './Main.css'
import { useNavigate } from 'react-router-dom';
import mainImage from '../../asset/main.png';
import mainLogo from '../../asset/logo.png';
import subLogo from '../../asset/sublogo.png';

// 시작화면
function Main() {
  const navigate = useNavigate();  // useNavigate 훅 사용


  //로컬스토리지 확인후 로그인 페이지 혹은 회원가입 페이지로 이동
  const handleButtonClick = () => {
    if (localStorage.getItem('password')) {
      navigate('../Login');  // '/next' 경로로 이동
    } else {
      navigate('../Login1');  // '/next' 경로로 이동
      //navigate('../SignUp');  // '/next' 경로로 이동
    }
  };


  return (
    <div className="MainPage">
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
  )
}

export default Main;