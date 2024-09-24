import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ESFPImage from '../../../asset/ESFP.png';
import ISFJImage from '../../../asset/ISFJ.png';
import INTJImage from '../../../asset/INTJ.png';

function Esfp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 놀면서 배우자!</h2>
            <h1 className="result-title"> 파티 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={ESFPImage}
                    alt="파티 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 친구들과 교실 분위기를 띄우는 에너자이저</li>
                <li>★ 즉흥적인 이벤트나 발표에 강함</li>
                <li>★ 수업보단 실습과 체험형 학습을 선호</li>
                <li>★ 팀 프로젝트에서 활기 넘치는 아이디어 제안</li>
                <li>★ 축제나 체육대회 같은 활동에 리더 역할 자주 맡음</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ISFJImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={INTJImage} alt="안 맞는 햇불이" />
                </div>
            </div>

            <button className="home-button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Esfp;
