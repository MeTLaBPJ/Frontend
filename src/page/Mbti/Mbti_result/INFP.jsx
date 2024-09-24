import React from "react";
import { useNavigate } from 'react-router-dom';
import './Result.css';
import INFPImage from '../../../asset/INFP.png';
import ENFJImage from '../../../asset/ENFJ.png';
import ESTJImage from '../../../asset/ESTJ.png';

function Infp(){
    const navigate = useNavigate();

    const handleBackToHome = () => {
      navigate('/ChatStartPage');
    };

    return (
        <div className="Mbti_result">
            <h1 className="title"> 횃불이 테스트 결과 </h1>
            <p className="who"> 당신은 ... </p>

            <h2 className="subtitle"> 모두가 행복해야 나도 행복해!</h2>
            <h1 className="result-title"> 내향 횃불이 </h1>

            <div className="profile">
                <img
                    className="profile-image"
                    src={INFPImage}
                    alt="내향 햇불이"
                />
            </div>

            <ul className="traits">
                <li>★ 자유롭고 창의적인 환경에서 아이디어를 발산하는 것을 좋아함</li>
                <li>★ 감정이 풍부해 예술 과목이나 문예 활동에서 두각을 나타냄</li>
                <li>★ 친구들과 깊이 있는 대화를 즐기고 고민 상담을 잘 들어줌</li>
                <li>★ 조용하지만 팀 프로젝트에서는 독특한 관점을 제시함</li>
                <li>★ 내성적이지만 개인적인 생각을 글이나 그림으로 표현하는 걸 선호</li>
            </ul>

            <div className="matches">
                <div className="good-match">
                    <p>잘 맞는 햇불이</p>
                    {/* import된 이미지 변수를 사용 */}
                    <img src={ENFJImage} alt="잘 맞는 햇불이" />
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

export default Infp;
