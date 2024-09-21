import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti2(){
    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue2 = Mbti.selectList["2"];

    const navigate = useNavigate(); 
    useEffect(() =>{
        console.log(Mbti);
        if(selectedValue2){
          setIsa1Checked(true);
          setIsa2Checked(false);

        }
        else{
          setIsa1Checked(false);
          setIsa2Checked(true);
        }
    },[selectedValue2,Mbti])


    // 사용자가 선택한 답변을 업데이트하는 함수
    const handleAnswerSelected = (answer) => {
      setSelectedAnswer(answer); // 선택된 답변을 상태로 저장
  };
    const handleBack = () => {
        if (selectedAnswer === 1) { //1번선택하면 그대로
            updateMbti({  selectList: { ...Mbti.selectList, "2": false } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ selectList: { ...Mbti.selectList, "2": true } });
        }
        navigate("/mbti1"); // 이전 페이지로 이동
      };
    const handleNext = () => {
        if (selectedAnswer === 1) {
            updateMbti({  selectList: { ...Mbti.selectList, "2": false } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ selectList: { ...Mbti.selectList, "2": true } });
        }
        navigate("/mbti3"); 
      };
    return(
        <div className="mbti">
        <header>
            <button className="back-button" onClick={handleBack}>
            <IoChevronBack />  
            </button>
            <div className="progress-bar">
            <div className="progress" style={{ width: "16%" }}></div>
            </div>
        </header>  
      
        <Question 
            question={"친구가 꿀 교양을 알려줬다! \n근데 토론을 한다고...?"} 
            answer1={"토론은 좀 부담스러운데..."}
            answer2={"헉 완전 재밌겠다!! 당장 잡아야지!"}
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

export default Mbti2;