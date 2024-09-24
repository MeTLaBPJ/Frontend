import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ESTJImage from '../../../asset/ESTJ.png';
import ISTJImage from '../../../asset/ISTJ.png';
import INFPImage from '../../../asset/INFP.png';

function Estj(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 규칙이 곧 법이다!</h2>
            <h1 className="result-title"> 모범 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={ESTJImage}
                    alt="모범 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 규칙과 시스템을 중시하여 질서 있는 학교 생활을 지향</li>
                <li>★ 팀 프로젝트에서 리더를 맡아 효율적으로 이끌음</li>
                <li>★ 성과 중심으로 학업 목표를 설정하고 달성</li>
                <li>★ 토론 수업에서 논리적이고 명확한 의견을 제시</li>
                <li>★ 조직력과 책임감이 강해 학교 내 다양한 직책을 수행</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ISTJImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={INFPImage} alt="안 맞는 햇불이" />
                </div>
            </div>

            <button className="home-button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Estj;
