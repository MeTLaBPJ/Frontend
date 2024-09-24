import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ESFPImage from '../../../asset/ESFP.png';
import ISFJImage from '../../../asset/ISFJ.png';
import INTJImage from '../../../asset/INTJ.png';

function Esfp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('./Login');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 놀면서 배우자!</h2>
            <h1 className="title"> 파티 횃불이 </h1>
           
            
                <img
                    className="profile-image"
                    src={ESFPImage}
                    alt="파티 햇불이"
                />
            

            <ul className="traits">
                <li>★ 친구들과 교실 분위기를 띄우는 에너자이저</li>
                <li>★ 즉흥적인 이벤트나 발표에 강함</li>
                <li>★ 수업보단 실습과 체험형 학습을 선호</li>
                <li>★ 팀 프로젝트에서 활기 넘치는 아이디어 제안</li>
                <li>★ 축제나 체육대회 같은 활동에 리더 역할 자주 맡음</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={ISFJImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">평화 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={INTJImage} alt="안 맞는 햇불이" />
                     <p className="nickname">분석 햇불이</p>
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

export default Esfp;
