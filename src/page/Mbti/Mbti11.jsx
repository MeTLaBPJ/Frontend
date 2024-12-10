import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti11(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["11"];
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
            updateMbti({  selectList: { ...Mbti.selectList, "11": false } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({  selectList: { ...Mbti.selectList, "11": true } });
        }
        navigate("/mbti10"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        
        if (selectedAnswer === 1) {
            updateMbti({ selectList: { ...Mbti.selectList, "11": false } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ selectList: { ...Mbti.selectList, "11": true } });
        }
        navigate("/mbti12"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "88%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구가 힘들어서 휴학을 고민 중이라고 한다 \n이때 당신의 반응은?"} 
            answer1={"뭐?? 휴학하고 뭐하게?"}
            answer2={"헉...무슨일이야?ㅜㅜ\n 많이 힘들어? "}
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

export default Mbti11;