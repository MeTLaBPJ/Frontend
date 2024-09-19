import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti6(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti5"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti7"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "48%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구 생일 선물을 챙겨주려고 한다.\n어떤 선물을 줄까?"} 
            answer1={"전에 친구가 이거 없다고 했으니까~ \n이거 사줘야지!"}
            answer2={"가성비 최고 상품권!!"}
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

export default Mbti6;