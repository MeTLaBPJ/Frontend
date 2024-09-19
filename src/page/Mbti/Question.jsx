import React from "react";
import { useState } from "react";

function Question({question, answer1, answer2}){
    const [selectedAnswer1, setSelectedAnswer1] = useState(false);

    
    const answer1Clicked = () => {
        if (selectedAnswer1) {
            setSelectedAnswer1(!selectedAnswer1);
        } 
    };
    return(
        <div className="question">

            <div id="Q">{question}</div>
            <button id="A1" className={`answer${selectedAnswer1? 'selected' : ''}`}
                                onClick={() => answer1Clicked()}>{answer1}</button>
            <button id="A2" className="answer">{answer2}</button>
      </div>
    );
}

export default Question;