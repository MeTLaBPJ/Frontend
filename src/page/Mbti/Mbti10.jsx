import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti10(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["10"];
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
            updateMbti({  selectList: { ...Mbti.selectList, "10": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({  selectList: { ...Mbti.selectList, "10": false } });
        }
        navigate("/mbti9"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        if (selectedAnswer === 1) {
            updateMbti({ p: eVal + 1, selectList: { ...Mbti.selectList, "10": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ p: eVal, selectList: { ...Mbti.selectList, "10": false } });
        }
        navigate("/mbti11"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"팀플 발표를 맡게 되었다! 발표 준비를 어떻게 할까?"} 
            answer1={"철학자~ 니체~ 독일~ 키워드만 준비해도 되겠지~"}
            answer2={"니체는 1844년 독일에서 태어나... \n 대본부터 리허설까지 철저하게 준비해야지"}
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

export default Mbti10;