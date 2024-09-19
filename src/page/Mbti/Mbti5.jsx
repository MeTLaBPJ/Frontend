import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti5(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti4"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti6"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "40%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"학과 개강 총회가 열렸다! 참석할 것인가?"} 
            answer1={"당연히 가야지~!! 이번엔 누구누구 오려나?"}
            answer2={"가도 말을 잘 못해서... 안갈래ㅜ"}
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

export default Mbti5;