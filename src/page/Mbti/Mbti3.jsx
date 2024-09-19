import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti3(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti2"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti4"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "24%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"오늘따라 수업이 이해가 잘 된다! \n 이때 드는 생각은?"} 
            answer1={"아 과탑하겠는데? 장학금 타면 뭐 하지?"}
            answer2={"오늘 집중력 개쩌는데?"}
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

export default Mbti3;