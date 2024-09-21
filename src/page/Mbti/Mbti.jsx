import React from 'react';
import { useNavigate } from "react-router-dom";
import './Mbti.css';



function Mbti (){

  const navigate = useNavigate();

    
  const handleNavigation = (destination) => {
      switch (destination) {
          case 'play':
              window.location.reload(); // 페이지 새로고침 (필요에 따라 이 부분을 변경)
              break;
          case 'talk':
              navigate('/ChatStartPage');
              break;
          case 'my':               
          navigate('/myPage');
              break;
          default:
              break;
      }
  };
  const handleNext = () => {
    navigate('/mbti1')
  }
  return (
    <div className='mbti' id='mbti_main'>
        <div id='mbti_title'></div>
        <div id='subTitle'>당신의 횃불이 유형은?</div>
        <div id='mbtiMain_img'></div>
        <button 
        id='test_start'
        className="bottom-Button" 
        onClick={handleNext} >테스트 시작하기</button>
         <div id="navi-con">
                <div id="navi">
                    <div id="play" onClick={() => handleNavigation('play')}></div>
                    <div id="talk" onClick={() => handleNavigation('talk')}></div>
                    <div id="my" onClick={() => handleNavigation('my')}></div>
                </div>
            </div>
    </div>
  );
};

export default Mbti;