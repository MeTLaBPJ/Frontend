import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti9(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["9"];
    const eVal = Mbti.p;
    const navigate = useNavigate(); 
    useEffect(() =>{
        if(selectedValue1){
          setIsa1Checked(true);
          setIsa2Checked(false);
        }
        else{
          setIsa1Checked(false);
          setIsa2Checked(true);
        }
    },[selectedValue1])


    // 사용자가 선택한 답변을 업데이트하는 함수
    const handleAnswerSelected = (answer) => {
      setSelectedAnswer(answer); // 선택된 답변을 상태로 저장
  };
    const handleBack = () => {
        if (selectedAnswer === 1) {
            updateMbti({  selectList: { ...Mbti.selectList, "9": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({  selectList: { ...Mbti.selectList, "9": false } });
        }
        navigate("/mbti8"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        if (selectedAnswer === 1) {
            updateMbti({ p: eVal + 1, selectList: { ...Mbti.selectList, "9": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ p: eVal, selectList: { ...Mbti.selectList, "9": false } });
        }
        navigate("/mbti10"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "72%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"과제 폭탄 시즌...! 이때 나는?"} 
            answer1={"미룬이~!! 마감 전까지만 내면 되겠지 뭐~"}
            answer2={"일단 계획을 세우고 차근차근해보자...!!"}
            a1Checked={isa1Checked}
            a2Checked={isa2Checked}
            onAnswerSelected={handleAnswerSelected}
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

export default Mbti9;