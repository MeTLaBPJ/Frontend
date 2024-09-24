import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import INTPImage from '../../../asset/INTP.png';
import INTJImage from '../../../asset/INTJ.png';
import ESFJImage from '../../../asset/ESFJ.png';

function Intp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 모두가 행복해야 나도 행복해!</h2>
            <h1 className="result-title"> 공상 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={INTPImage}
                    alt="공상 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 수업 중 깊이 있는 질문을 자주 던지며 학문적 호기심이 강함</li>
                <li>★ 독립적인 학습을 선호하며 스스로 자료를 찾아 학습함</li>
                <li>★ 논리적이고 분석적인 수업에서 두각을 나타냄</li>
                <li>★ 그룹 프로젝트에서 혼자 깊이 있는 분석을 제공하는 스타일</li>
                <li>★ 팀 활동보다는 개별적인 연구나 과제에서 더 큰 성과를 냄</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={INTJImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ESFJImage} alt="안 맞는 햇불이" />
                </div>
            </div>

            <button className="home-button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Intp;
