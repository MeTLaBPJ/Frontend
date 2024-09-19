import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti11(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti10"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti12"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "88%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구가 힘들어서 휴학을 고민 중이라고 한다 이때 당신의 반응은?"} 
            answer1={"뭐?? 휴학하고 뭐하게?"}
            answer2={"헉...무슨일이야?ㅜㅜ\n 많이 힘들어? "}
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

export default Mbti11;