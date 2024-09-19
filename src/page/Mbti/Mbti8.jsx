import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti8(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["8"];
    const eVal = Mbti.s;
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
            updateMbti({  selectList: { ...Mbti.selectList, "8": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({  selectList: { ...Mbti.selectList, "8": false } });
        }
        navigate("/mbti7"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        if (selectedAnswer === 1) {
            updateMbti({ s: eVal + 1, selectList: { ...Mbti.selectList, "8": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ s: eVal, selectList: { ...Mbti.selectList, "8": false } });
        }
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
            a1Checked={isa1Checked}
            a2Checked={isa2Checked}
            onAnswerSelected={handleAnswerSelected}/>

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