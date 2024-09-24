import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import INTPImage from '../../../asset/INTP.png';
import INTJImage from '../../../asset/INTJ.png';
import ESFJImage from '../../../asset/ESFJ.png';

function Intp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('./Login');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 모두가 행복해야 나도 행복해!</h2>
            <h1 className="title"> 공상 횃불이 </h1>
    
           
                <img
                    className="profile-image"
                    src={INTPImage}
                    alt="공상 햇불이"
                />
           

            <ul className="traits">
                <li>★ 수업 중 깊이 있는 질문을 던지며 학문적 호기심이 강함</li>
                <li>★ 독립적인 학습을 선호하며 스스로 자료를 찾아 학습함</li>
                <li>★ 논리적이고 분석적인 수업에서 두각을 나타냄</li>
                <li>★ 팀 프로젝트에서 혼자 깊이 있는 분석을 제공하는 스타일</li>
                <li>★ 팀 활동보다는 개별적인 연구나 과제에서 더 큰 성과를 냄</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={INTJImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">분석 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={ESFJImage} alt="안 맞는 햇불이" />
                     <p className="nickname">친절 햇불이</p>
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

export default Intp;
