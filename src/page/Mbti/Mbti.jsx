import React from 'react';
import { useNavigate } from "react-router-dom";
import './Mbti.css';



function Mbti (){

  const navigate = useNavigate(); 
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
    </div>
  );
};

export default Mbti;