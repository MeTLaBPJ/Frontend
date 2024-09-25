import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import INTJImage from '../../../asset/INTJ.png';
import ENTJImage from '../../../asset/ENTJ.png';
import ESFPImage from '../../../asset/ESFP.png';

function Intj(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 이건 왜 그러는거지?</h2>
            <h1 className="title"> 분석 횃불이 </h1>

                <img
                    className="profile-image"
                    src={INTJImage}
                    alt="분석 햇불이"
                />

            <ul className="traits">
                <li>★ 철저한 계획 아래 학업을 진행하고 목표를 설정함</li>
                <li>★ 학업 성취도가 높으며 깊이 있는 학습을 선호함</li>
                <li>★ 팀 프로젝트에서 전략적인 사고로 전체 방향을 설정함</li>
                <li>★ 자신의 능력을 믿고 독립적으로 학업을 수행하는 스타일</li>
                <li>★ 논리적이고 분석적인 수업에서 두각을 나타냄</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={ENTJImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">단호 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={ESFPImage} alt="안 맞는 햇불이" />
                     <p className="nickname">파티 햇불이</p>
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

export default Intj;