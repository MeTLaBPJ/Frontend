import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti7(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["7"];
    const eVal = Mbti.f;
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
            updateMbti({  selectList: { ...Mbti.selectList, "7": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({  selectList: { ...Mbti.selectList, "7": false } });
        }
        navigate("/mbti6"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        if (selectedAnswer === 1) {
            updateMbti({ f: eVal + 1, selectList: { ...Mbti.selectList, "7": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ f: eVal, selectList: { ...Mbti.selectList, "7": false } });
        }
        navigate("/mbti8"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "56%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구가 시험을 망쳐서 속상하다고 말한다. 당신의 반응은?"} 
            answer1={"그래도 고생했어, 다음에는 더 잘할 수 있을 거야"}
            answer2={"아 그래? 아쉬운 거지~"}
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

export default Mbti7;