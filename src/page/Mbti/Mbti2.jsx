import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti2(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti1"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti3"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "16%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구가 꿀 교양을 알려줬다! 근데 토론을 한다고...?"} 
            answer1={"토론은 좀 부담스러운데..."}
            answer2={"헉 완전 재밌겠다!! 당장 잡아야지!"}
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

export default Mbti2;