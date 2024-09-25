import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ESTPImage from '../../../asset/ESTP.png';
import ISTPImage from '../../../asset/ISTP.png';
import INFJImage from '../../../asset/INFJ.png';

function Estp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 도전이 없다면 재미도 없다!</h2>
            <h1 className="title"> 도전 횃불이 </h1>

         
                <img
                    className="profile-image"
                    src={ESTPImage}
                    alt="도전 햇불이"
                />
          

            <ul className="traits">
                <li>★ 문제 해결 능력이 뛰어나서 빠른 판단과 실행력</li>
                <li>★ 수업 중 갑작스러운 질문이나 상황에도 즉각 대응</li>
                <li>★ 운동이나 동아리 같은 다양한 활동에 도전하는 걸 즐김</li>
                <li>★ 경쟁심이 강해서 성취감을 느끼는 일에 적극적</li>
                <li>★ 실습과 실전에서 더 강한 모습을 보임</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={ISTPImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">과묵 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={INFJImage} alt="안 맞는 햇불이" />
                     <p className="nickname">낭만 햇불이</p>
                 </div>
                </div>
            </div>

            <div className="button-container">
            <button className="bottom-Button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
            </div>
        </div>
        </div>
    );
};

export default Estp;