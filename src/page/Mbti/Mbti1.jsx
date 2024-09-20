import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 추가
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";
function Mbti1(){

    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked,setIsa1Checked]=useState(false);
    const [isa2Checked,setIsa2Checked]=useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답변 상태
    const selectedValue1 = Mbti.selectList["1"];
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
      if (selectedAnswer === 1) { //1번선택하면 e+1
        updateMbti({  selectList: { ...Mbti.selectList, "1": true } });
        console.log("Context updated:");
      
    } else if (selectedAnswer === 2) {
        updateMbti({selectList: { ...Mbti.selectList, "1": false } });
    }
        navigate("/mbti"); // 이전 페이지로 이동
      };
    const handleNext = () => {
       if (selectedAnswer === 1) {
            updateMbti({  selectList: { ...Mbti.selectList, "1": true } });
            console.log("Context updated:");
          
        } else if (selectedAnswer === 2) {
            updateMbti({ selectList: { ...Mbti.selectList, "1": false } });
        }
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

export default Mbti1;