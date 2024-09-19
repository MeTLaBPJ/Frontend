import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";

function Mbti1(){

    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate("/mbti"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        navigate("/mbti2"); 
      };


    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "8%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"대망의 학기 첫 수업! \n강의실에 갔는데 나 빼고 다들 친해진 것 같아 보인다... \n나의 선택은?"} 
            answer1={"옆 자리 사람에게 말을 건다."}
            answer2={"누가 나한테 말 걸어줬으면 좋겠다ㅠㅠ"}
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

export default Mbti1;