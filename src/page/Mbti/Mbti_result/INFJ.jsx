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
            <div className="container">
            <h2 className="subtitle"> 낭만은 챙기면서 살아야지~ </h2>
            <h1 className="title"> 낭만 횃불이 </h1>
          
            
                <img
                    className="profile-image"
                    src={INFJImage}
                    alt="낭만 햇불이"
                />
            

            <ul className="traits1">
                <li>★ 창의적이고 깊이 있는 사고로 프로젝트를 수행</li>
                <li>★ 다른 사람들의 감정을 잘 이해해 학급 내 중재 역할을 함</li>
                <li>★ 독립적으로 일하는 것을 선호하지만 팀 프로젝트에서도 깊이 있는 기여를 함</li>
                <li>★ 선생님과 친구들에게 신뢰받는 진지한 태도를 지님</li>
                <li>★ 새로운 아이디어를 바탕으로 학교 행사나 프로젝트 기획에 적극적</li>
            </ul>

            <div className="matches">
                <div className="good-bad-match">
                    <div className="good-match">
                        <p className="combination">잘 맞는 햇불이</p>
                         <img src={ENFPImage} alt="잘 맞는 햇불이" />
                        <p className="nickname">꽃밭 햇불이</p>
                </div>

                <div className="bad-match">
                    <p className = "combination">안 맞는 햇불이</p>
                    <img src={ESTPImage} alt="안 맞는 햇불이" />
                     <p className="nickname">도전 햇불이</p>
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

export default Infj;
