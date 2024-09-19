import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti7(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti6"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti8"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "56%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구가 시험을 망쳐서 속상하다고 말한다. 당신의 반응은?"} 
            answer1={"그래도 고생했어, 다음에는 더 잘할 수 있을 거야"}
            answer2={"아 그래? 아쉬운 거지~"}
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

export default Mbti7;