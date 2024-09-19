import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti4(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti3"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti5"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "32%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"아~ 배고파 오늘은 학식먹을까? \n 나만의 학식 먹는 방법은?"} 
            answer1={"내가 먹고 싶은 메뉴 미리 예약하고 가야지!"}
            answer2={"일단 학식당 가서 그때 당기는 거 먹자"}
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

export default Mbti4;