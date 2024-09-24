import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ENTPImage from '../../../asset/ENTP.png';
import INFJImage from '../../../asset/INFJ.png';
import ESTJImage from '../../../asset/ESTJ.png';

function Entp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('./Login');
    };

    return (
        <div className="Mbti_result">
            <div className="container">
            <h2 className="subtitle"> 내 길은 내가 만든다!</h2>
            <h1 className="title"> 마이웨이 횃불이 </h1>

                <img
                    className="profile-image"
                    src={ENTPImage}
                    alt="마이웨이 햇불이"
                />
         

            <ul className="traits">
                <li>★ 수업 중 새로운 아이디어로 토론을 리드</li>
                <li>★ 독창적인 해결책으로 팀 프로젝트에서 창의적인 역할</li>
                <li>★ 논쟁을 즐기며 다양한 관점을 탐구함</li>
                <li>★ 교실에서는 규칙보다는 자유로운 사고를 중요시함</li>
                <li>★ 학업보다는 실습과 창의력 발휘에 중점을 둠</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={INFJImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">낭만 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={ESTJImage} alt="안 맞는 햇불이" />
                     <p className="nickname">모범 햇불이</p>
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

export default Entp;
