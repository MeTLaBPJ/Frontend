import React, { useContext } from "react";
import { useState , useEffect} from "react";
import { MbtiContext } from "../../context/MbitContext";

function Question({question, answer1, answer2, a1Checked, a2Checked, onAnswerSelected}){
   
   
    const [selectedAnswer1, setSelectedAnswer1] = useState(false);
    const [selectedAnswer2, setSelectedAnswer2] = useState(false);
 useEffect(()=>{
        if(a1Checked){
            setSelectedAnswer1(true);
           
        }
        else if(a2Checked){
            setSelectedAnswer2(true);
        }
    },[a1Checked, a2Checked])
   
    const answer1Clicked = () => {
        if (selectedAnswer2) {
            setSelectedAnswer2(false);
        }
        setSelectedAnswer1(true);
        onAnswerSelected(1); // 1번 답변을 선택했다는 정보 전달
    };

    const answer2Clicked = () => {
        if (selectedAnswer1) {
            setSelectedAnswer1(false);
        }
        setSelectedAnswer2(true);
        onAnswerSelected(2); // 2번 답변을 선택했다는 정보 전달
    };
    return(
        <div className="question">

            <div id="Q">{question}</div>
            <button id="A1" className={`answer${selectedAnswer1? 'selected' : ''}`}
                                onClick={() => answer1Clicked()}>{answer1}</button>
            <button id="A2" className={`answer${selectedAnswer2? 'selected' : ''}`}
                                onClick={() => answer2Clicked()}>{answer2}</button>
      </div>
    );
}

export default Question;