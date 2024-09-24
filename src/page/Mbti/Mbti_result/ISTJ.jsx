import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ISTJImage from '../../../asset/ISTJ.png';
import ISFPImage from '../../../asset/ISFP.png';
import ISFJImage from '../../../asset/ISFJ.png';

function Istj(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('./Login');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 모두가 행복해야 나도 행복해!</h2>
            <h1 className="title"> 진지 횃불이 </h1>
        
         
                <img
                    className="profile-image"
                    src={ISTJImage}
                    alt="진지 햇불이"
                />
         

            <ul className="traits">
                <li>★ 친구를 챙기며 학급 분위기를 화목하게 만듦</li>
                <li>★ 발표나 팀 활동에서 조화와 협동을 중시</li>
                <li>★ 친구의 고민 상담을 자주 받아주는 따뜻한 성격</li>
                <li>★ 선생님과 동급생 모두에게 신뢰받는 존재</li>
                <li>★ 학교 행사나 봉사활동에 자발적으로 참여</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={ISFPImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">귀찮 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={ISFJImage} alt="안 맞는 햇불이" />
                     <p className="nickname">평화 햇불이</p>
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

export default Istj;
