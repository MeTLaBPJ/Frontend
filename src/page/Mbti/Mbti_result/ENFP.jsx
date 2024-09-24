import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ENFPImage from '../../../asset/ENFP.png';
import INFJImage from '../../../asset/INFJ.png';
import ESTJImage from '../../../asset/ESTJ.png';

function Enfp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 상상력이 가득한 자유로운 영혼!</h2>
            <h1 className="result-title"> 꽃밭 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={ENFPImage}
                    alt="꽃밭 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 창의적 아이디어로 학교 프로젝트에서 활약</li>
                <li>★ 수업 시간에도 새로운 아이디어를 끊임없이 제안</li>
                <li>★ 교우 관계에서 자발적으로 새로운 사람과 친해짐</li>
                <li>★ 발표나 연극 같은 활동에서 특유의 열정과 유머를 발휘</li>
                <li>★ 정형화된 틀보다는 자유로운 수업 방식을 선호</li>
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

export default Enfp;
