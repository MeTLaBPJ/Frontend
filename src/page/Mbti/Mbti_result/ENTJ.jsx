import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ENTJImage from '../../../asset/ENTJ.png';
import ISFPImage from '../../../asset/ISFP.png';
import INTJImage from '../../../asset/INTJ.png';

function Entj(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 안돼. 돌아가.</h2>
            <h1 className="title"> 단호 횃불이 </h1>
            
          
                <img
                    className="profile-image"
                    src={ENTJImage}
                    alt="단호 햇불이"
                />
         

            <ul className="traits">
                <li>★ 리더십이 강해 팀 프로젝트에서 주도적 역할</li>
                <li>★ 목표 달성에 매우 집중하고 계획적</li>
                <li>★ 토론 수업에서 설득력 있는 주장을 펼침</li>
                <li>★ 친구들과도 경쟁적이지만 결과로 인정받고 싶어 함</li>
                <li>★ 학교 활동에서 효율성 강조, 비효율적인 것에 불만</li>
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
                    <img src={ISFPImage} alt="안 맞는 햇불이" />
                     <p className="nickname">귀찮 햇불이</p>
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

export default Entj;
