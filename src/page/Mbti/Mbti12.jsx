import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import Question from "./Question";
import "./Mbti.css";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { MbtiContext } from "../../context/MbitContext";
import { getUser } from "../../api/getUser";
import { putUser } from "../../api/putUser";

function Mbti12() {
    const { Mbti, updateMbti } = useContext(MbtiContext);
    const [isa1Checked, setIsa1Checked] = useState(false);
    const [isa2Checked, setIsa2Checked] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [mbtiChecked, setMbtiChecked] = useState('');
    const selectedValue1 = Mbti.selectList["12"];
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [token, setToken] = useState('');
    const [data, setData] = useState({
        nickname: "",
        schoolEmail: 0,
        studentId: "",
        department: "",
        college: "",
        shortIntroduce: ""
    });

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setToken(storedToken);
        } 
    }, []);

    useEffect(() => {
        const fetchMypageData = async () => {
            if (!token) return;

            try {
                const mypageData = await getUser(token);
                setData(mypageData);
            } catch (error) {
                console.error('Error fetching mypage data:', error);
            }
        };

        fetchMypageData();
    }, [token]);

    const eVal = () => {
        return ["1", "2", "5"].reduce((acc, key) => acc + (Mbti.selectList[key] ? 1 : 0), 0);
    };

    const sVal = () => {
        return ["3", "8", "12"].reduce((acc, key) => acc + (Mbti.selectList[key] ? 1 : 0), 0);
    };

    const fVal = () => {
        return ["6", "7", "11"].reduce((acc, key) => acc + (Mbti.selectList[key] ? 1 : 0), 0);
    };

    const pVal = () => {
        return ["4", "9", "10"].reduce((acc, key) => acc + (Mbti.selectList[key] ? 1 : 0), 0);
    };

    const navigate = useNavigate(); 

    useEffect(() => {
        setIsa1Checked(selectedValue1);
        setIsa2Checked(!selectedValue1);
    }, [selectedValue1]);

    const mbtiHandler = () => {
        let mbti = '';
        mbti += eVal() >= 2 ? 'E' : 'I';
        mbti += sVal() >= 2 ? 'S' : 'N';
        mbti += fVal() >= 2 ? 'F' : 'T';
        mbti += pVal() >= 2 ? 'P' : 'J';
        return mbti;
    };

    const handleAnswerSelected = (answer) => {
        setSelectedAnswer(answer);
        updateMbti({ selectList: { ...Mbti.selectList, "12": answer === 1 } });
    };

    const openModal = () => {
        setModalIsOpen(true);
        setTimeout(closeModal, 3000);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        const computeAndNavigate = async () => {
            if (mbtiChecked) {
                const computedMbti = mbtiHandler();
                setMbtiChecked(computedMbti); // Update MBTI state

                // Navigate based on computed MBTI
                switch (computedMbti) {
                    case 'ESTJ': navigate("/estj_result"); break;
                    case 'ISTJ': navigate("/istj_result"); break;
                    case 'ENTP': navigate("/entp_result"); break;
                    case 'INTP': navigate("/intp_result"); break;
                    case 'ESFJ': navigate("/esfj_result"); break;
                    case 'ISFJ': navigate("/isfj_result"); break;
                    case 'ENFJ': navigate("/enfj_result"); break;
                    case 'INFJ': navigate("/infj_result"); break;
                    case 'ESTP': navigate("/estp_result"); break;
                    case 'ISTP': navigate("/istp_result"); break;
                    case 'ENTJ': navigate("/entj_result"); break;
                    case 'INTJ': navigate("/intj_result"); break;
                    case 'ESFP': navigate("/esfp_result"); break;
                    case 'ISFP': navigate("/isfp_result"); break;
                    case 'ENFP': navigate("/enfp_result"); break;
                    case 'INFP': navigate("/infp_result"); break;
                    default: navigate("/default_result");
                }

                // Update user data with MBTI
                try {
                    await putUser(token, { ...data, mbti: computedMbti });
                } catch (error) {
                    console.error('Error updating user data:', error);
                }
            }
        };
        
        computeAndNavigate();
    }, [mbtiChecked, navigate, token, data]);

    const handleNext = () => {
        openModal();
        setMbtiChecked(mbtiHandler()); // Calculate MBTI when moving to the next question
    };

    return (
        <div className="mbti">
            <header>
                <button className="back-button" onClick={() => navigate("/mbti11")}>
                    <IoChevronBack />  
                </button>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "100%" }}></div>
                </div>
            </header>  
            <Question 
                question={"교수님이 공지사항을 올리셨다. \n “chat gpt를 사용해 과제한 학생은 \n자수하면 0점, \n 자수 없이 발각되면 F 처리 하겠습니다.”"} 
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

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Pop up Message"
                ariaHideApp={false}
                className="modal"
                overlayClassName="overlay"
            >
                <div id="img"></div>
                <div>횃불이 유형을 분석하고 있어요</div>
                <div>잠시만 기다려주세요</div>
            </Modal>
        </div>
    );
}

export default Mbti12;
