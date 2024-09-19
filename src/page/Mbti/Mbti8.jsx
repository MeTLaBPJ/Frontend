import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti8(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti7"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti9"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "64%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"강아지는 야옹~, 고양이는 멍멍 \n 시험에 나오니까 외워~"} 
            answer1={"엥? 왜그러지? 그렇지만 외워야겠다"}
            answer2={"도대체 왜!?!? 절대 이해할 수 없어.. 넘어갈 수가 없다!"}
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

export default Mbti8;