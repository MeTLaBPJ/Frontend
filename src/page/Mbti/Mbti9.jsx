import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti9(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti8"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti10"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "72%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"과제 폭탄 시즌...! 이때 나는?"} 
            answer1={"미룬이~!! 마감 전까지만 내면 되겠지 뭐~"}
            answer2={"일단 계획을 세우고 차근차근해보자...!!"}
        />

      <button 
          className="bottom-Button" 
          onClick={handleNext} 
        >
          다음
        </button>
        </div>
    );


}

export default Mbti9;