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
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 내 길은 내가 만든다!</h2>
            <h1 className="result-title"> 마이웨이 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={ENTPImage}
                    alt="마이웨이 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 수업 중 새로운 아이디어로 토론을 리드</li>
                <li>★ 독창적인 해결책으로 팀 프로젝트에서 창의적인 역할</li>
                <li>★ 논쟁을 즐기며 다양한 관점을 탐구함</li>
                <li>★ 교실에서는 규칙보다는 자유로운 사고를 중요시함</li>
                <li>★ 학업보다는 실습과 창의력 발휘에 중점을 둠</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={INFJImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ESTJImage} alt="안 맞는 햇불이" />
                </div>
            </div>

            <button className="home-button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Entp;
