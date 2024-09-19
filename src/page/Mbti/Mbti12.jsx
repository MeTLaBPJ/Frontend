import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import Question from "./Question";
import "./Mbti.css";
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";

function Mbti12() {
    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked, setIsa1Checked] = useState(false);
    const [isa2Checked, setIsa2Checked] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [mbtiChecked, setMbtiChecked] = useState('');
    const selectedValue1 = Mbti.selectList["12"];
    const sVal = Mbti.s;
    const eVal = Mbti.e;
    const fVal = Mbti.f;
    const pVal = Mbti.p;
    const navigate = useNavigate(); 

    useEffect(() => {
        console.log(Mbti);
        if (selectedValue1) {
            setIsa1Checked(true);
            setIsa2Checked(false);
        } else {
            setIsa1Checked(false);
            setIsa2Checked(true);
        }
    }, [selectedValue1]);

    const mbtiHandler = () => {
        console.log("mbtiHandler called");

        let mbti = '';
        if (eVal >= 2) mbti += 'E';
        else mbti += 'I';

        if (sVal >= 2) mbti += 'S';
        else mbti += 'N';

        if (fVal >= 2) mbti += 'F';
        else mbti += 'T';

        if (pVal >= 2) mbti += 'P';
        else mbti += 'J';

        setMbtiChecked(mbti);
        console.log('Calculated MBTI:',mbti); // 디버깅 로그
    };

    const handleAnswerSelected = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleBack = () => {
        if (selectedAnswer === 1) {
            updateMbti({  selectList: { ...Mbti.selectList, "12": true } });
        } else if (selectedAnswer === 2) {
            updateMbti({ selectList: { ...Mbti.selectList, "12": false } });
        }
        navigate("/mbti11");
    };

    const handleNext = () => {
        // 선택한 답변에 따라 MBTI 업데이트
        if (selectedAnswer === 1) {
            updateMbti({ s: sVal + 1, selectList: { ...Mbti.selectList, "12": true } });
        } else if (selectedAnswer === 2) {
            updateMbti({ s: sVal, selectList: { ...Mbti.selectList, "12": false } });
        }

        // MBTI 타입 계산
        mbtiHandler();

        // mbtiChecked가 업데이트된 후 라우팅
        if (mbtiChecked) {
            switch (mbtiChecked) {
                case 'ESTJ':
                    navigate("/estj_result");
                    break;
                case 'ISTJ':
                    navigate("/istj_result");
                    break;
                case 'ENTP':
                    navigate("/entp_result");
                    break;
                case 'INTP':
                    navigate("/intp_result");
                    break;
                case 'ESFJ':
                    navigate("/esfj_result");
                    break;
                case 'ISFJ':
                    navigate("/isfj_result");
                    break;
                case 'ENFJ':
                    navigate("/enfj_result");
                    break;
                case 'INFJ':
                    navigate("/infj_result");
                    break;
                case 'ESTP':
                    navigate("/estp_result");
                    break;
                case 'ISTP':
                    navigate("/istp_result");
                    break;
                case 'ENTJ':
                    navigate("/entj_result");
                    break;
                case 'INTJ':
                    navigate("/intj_result");
                    break;
                case 'ESFP':
                    navigate("/esfp_result");
                    break;
                case 'ISFP':
                    navigate("/isfp_result");
                    break;
                case 'ENFP':
                    navigate("/enfp_result");
                    break;
                case 'INFP':
                    navigate("/infp_result");
                    break;
                default:
                    navigate("/default_result"); // 일치하는 값이 없을 경우
                    break;
            }
        }
    };

    useEffect(() => {
        console.log('mbti:', mbtiChecked);
    }, [mbtiChecked]); // mbtiChecked가 변경될 때마다 콘솔 로그

    return (
        <div className="mbti">
            <header>
                <button className="back-button" onClick={handleBack}>
                    <IoChevronBack />  
                </button>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "100%" }}></div>
                </div>
            </header>  
            <Question 
                question={"교수님이 갑작스러운 공지사항을 올리셨다. \n “chat gpt를 사용해 과제한 학생은 \n자수하면 0점, \n 자수 없이 발각되면 F 처리 하겠습니다.”"} 
                answer1={"에이, 안걸리면 그만이야~"}
                answer2={"설마 난가..? 지금이라도 자수할까??"}
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

export default Mbti12;
