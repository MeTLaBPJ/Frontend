import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti10(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti9"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti11"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"팀플 발표를 맡게 되었다! 발표 준비를 어떻게 할까?"} 
            answer1={"철학자~ 니체~ 독일~ 키워드만 준비해도 되겠지~"}
            answer2={"니체는 1844년 독일에서 태어나... \n 대본부터 리허설까지 철저하게 준비해야지"}
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

export default Mbti10;