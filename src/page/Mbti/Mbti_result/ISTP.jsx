import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ISTPImage from '../../../asset/ISTP.png';
import ISFPImage from '../../../asset/ISFP.png';
import ISFJImage from '../../../asset/ISFJ.png';

function Istp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('./Login');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 모두가 행복해야 나도 행복해!</h2>
            <h1 className="result-title"> 과묵 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={ISTPImage}
                    alt="과묵 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 친구를 챙기며 학급 분위기를 화목하게 만듦</li>
                <li>★ 발표나 팀 활동에서 조화와 협동을 중시</li>
                <li>★ 친구의 고민 상담을 자주 받아주는 따뜻한 성격</li>
                <li>★ 선생님과 동급생 모두에게 신뢰받는 존재</li>
                <li>★ 학교 행사나 봉사활동에 자발적으로 참여</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    <img src={ISFPImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 햇불이</p>
                    <img src={ISFJImage} alt="안 맞는 햇불이" />
                </div>
            </div>

            <button className="home-button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Istp;
