import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import ENFJImage from '../../../asset/ENFJ.png';
import ISFPImage from '../../../asset/ISFP.png';
import INTJImage from '../../../asset/INTJ.png';

function Enfj(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('./Login');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 모두가 함께 성장할 수 있어!</h2>
            <h1 className="result-title"> 사교 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={ENFJImage}
                    alt="사교 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 친구들을 잘 이끌며 학교 내 분위기 메이커</li>
                <li>★ 발표나 토론에서 중재 역할을 잘 함</li>
                <li>★ 팀 프로젝트에서 협력과 조화를 강조</li>
                <li>★ 리더십과 공감을 바탕으로 학급을 이끌어가는 스타일</li>
                <li>★ 봉사활동이나 학교 행사에서 적극적으로 참여</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 횃불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ISFPImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 횃불이</p>
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

export default Enfj;
