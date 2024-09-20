import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti5(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["5"];
    const eVal = Mbti.e;
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
            updateMbti({  selectList: { ...Mbti.selectList, "5": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ selectList: { ...Mbti.selectList, "5": false } });
        }
        navigate("/mbti4"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        if (selectedAnswer === 1) {
            updateMbti({ e: eVal + 1, selectList: { ...Mbti.selectList, "5": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ e: eVal, selectList: { ...Mbti.selectList, "5": false } });
        }
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

export default Mbti5;