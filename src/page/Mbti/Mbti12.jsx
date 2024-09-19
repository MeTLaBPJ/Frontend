import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti2(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti11"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti_result"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "100%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"교수님이 갑작스러운 공지사항을 올리셨다. \n “chat gpt를 사용해 과제한 학생은 자수하면 0점, \n 자수 없이 발각되면 F 처리 하겠습니다.”"} 
            answer1={"에이, 안걸리면 그만이야~"}
            answer2={"설마 난가..? 지금이라도 자수할까??"}
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