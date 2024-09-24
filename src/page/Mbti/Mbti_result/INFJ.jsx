import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import INFJImage from '../../../asset/INFJ.png';
import ENFPImage from '../../../asset/ENFP.png';
import ESTPImage from '../../../asset/ESTP.png';

function Infj(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 낭만은 챙기면서 살아야지~ </h2>
            <h1 className="result-title"> 낭만 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={INFJImage}
                    alt="낭만 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 창의적이고 깊이 있는 사고로 학교 과제나 프로젝트를 수행</li>
                <li>★ 다른 사람들의 감정을 잘 이해해 학급 내 중재 역할을 함</li>
                <li>★ 독립적으로 일하는 것을 선호하지만 팀 프로젝트에서도 깊이 있는 기여를 함</li>
                <li>★ 선생님과 친구들에게 신뢰받는 진지한 태도를 지님</li>
                <li>★ 새로운 아이디어를 바탕으로 학교 행사나 프로젝트 기획에 적극적</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ENFPImage} alt="잘 맞는 햇불이" />
                </div>

                <div className="bad-match">
                    <p>안 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ESTPImage} alt="안 맞는 햇불이" />
                </div>
            </div>

            <button className="home-button" onClick={handleBackToHome}>
                홈 화면으로 돌아가기
            </button>
        </div>
    );
};

export default Infj;
