import React, { useState, useEffect} from "react";
import Tabs from "./Tabs";
import "./Mypage.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api/getUser";
import { putUser} from "../../api/putUser";
import profileImage from "../../asset/ChatRoomPic1.png"


function Mypage() {
    const navigate = useNavigate();  

    const [data, setData] = useState({
        nickname: "",
        schoolEmail: 0,
        studentId: "",
        department:"",
        mbti:"",
        college:"",
        shortIntroduce:""
    });

    const [newData, setNewData] = useState({
        college: data.college,
        department: data.department,
        drinking: "",
        height: "",
        mbti: "",
        nickname: data.nickname,
        schoolEmail: data.schoolEmail,
        smoking: "",
        shortIntroduce:""
    })
    const [token, setToken] = useState('');
   
    useEffect(() => {
        // 로컬 스토리지에서 토큰 읽어오기
        const storedToken = localStorage.getItem('accessToken');
        console.log(storedToken);
        if (storedToken) {
            setToken(storedToken);
        } 
    }, []);

    useEffect(() => {
        if (!token) return; // 토큰이 없으면 데이터를 가져오지 않음

        // 마이페이지 정보를 가져오는 함수 호출
        const fetchMypageData = async () => {
            try {
                const mypageData = await getUser(token);
                setData(mypageData);
                setNewData(mypageData);
            } catch (error) {
                console.error('Error fetching mypage data:', error);
            }
        };

        fetchMypageData();
    }, [token]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setNewData((prevData) => ({
          ...prevData,
          [id]: value // 입력 필드의 name 속성에 따라 상태를 업데이트
        }));
      };
      const handleNavigation = (destination) => {
        switch (destination) {
            case 'play':
                navigate('/mbti');
                break;
            case 'talk':
                navigate('/ChatStartPage');
                break;
            case 'my':               
            navigate('/myPage');
                break;
            default:
                break;
        }
    };
    const handleSubmit= async()=>{
        try {
            await putUser(token,newData);
        } catch (error) {
            console.error('Error fetching mypage data:', error);
        }
    }
    const handleShortIntroduceChange = (event) => {
        const { id, value } = event.target;
        setNewData((prevData) => ({
          ...prevData,
          [id]: value // 입력 필드의 name 속성에 따라 상태를 업데이트
        }));
      };

    const handleMbtiTest=()=>{
        navigate('/mbti');
    }
    return (
        
           
            <div className="mypage">
                <div id="title">
                    마이페이지
                </div>
                <div id="profile">
                  <div className="top">

                        <img alt="" id="profile_img"
                            src={profileImage} />
                    </div>
                    <div id="nickname">{data.nickname}</div>
                    <div id="etc">{data.department} {data.studentId.substring(2, 4)}학번</div>
                </div>
                <div id="divider"></div>
                <div id="tabCont">
                    <Tabs>
                        <div label="프로필">
                            <div id="profile_info">내 정보에서 프로필 내용을 수정할 수 있어요</div>
                            <div id="ment_cont">
                                <div id="ment_title" >나의 한 마디</div>
                                <div id="ment_input">
                                    <input
                                        id="shortIntroduce"
                                            value={newData.shortIntroduce|| ""}
                                            onChange={handleShortIntroduceChange}
                                            placeholder={data.shortIntroduce}
                                    ></input>
                                    <button id="ment_btn" onClick={handleSubmit}>수정</button>
                                </div>
                            </div>
                            <div id="others">
                                <div id="mbti" className="option">  · MBTI
                                    <div className="option_info">{data.mbti}</div>
                                </div>
                                <div id="height" className="option"> · 키
                                    <div className="option_info">{data.height ? (
                                        <div>{data.height}cm</div>
                                    ) : (
                                        <div></div>
                                    )}</div>
                                </div>
                                <div id="drinking" className="option"> · 음주
                                    <div className="option_info"> {data.drinking}</div>
                                </div>
                                <div id="smoking" className="option"> · 흡연
                                    <div className="option_info">{data.smoking}</div>
                                </div>

                            </div>
                            <div id="email">
                                <div className="option" >· 이메일 </div>
                                <div id="email_info">{data.schoolEmail}</div>
                            </div>
                            {/*<button id="secession" >탈퇴하기</button>*/}
                        </div>


                             <div label="내 정보"> 
                            <div id="profile_info">키워드 사이엔 쉼표(,)로 구분해주세요</div>

                            <div id="email">
                                <div className="option">· 이메일 </div>
                                <div id="email_info">{data.schoolEmail}</div>
                            </div>

                            <div id="others">
                                <div className="mTitle">프로필
                                    <button id="submit" onClick={handleSubmit}>저장</button>
                                </div>
                                <div id="mbti" className="option">  · MBTI
                                    <input
                                        id="mbti"
                                       
                                        className={`mbti_input ${!data.mbti ? 'empty' : ''}`}
                                        value={newData.mbti}
                                        onChange={handleInputChange}
                                        placeholder={data.mbti}
                                    />
                                    <button className="mbti-test" onClick={handleMbtiTest}>테스트</button>
                                </div>
                                <div id="height" className="option"> · 키
                                    <input
                                        id="height"
            
                                        className={`height_input ${!data.height ? 'empty' : ''}`}
                                        value={newData.height}
                                        onChange={handleInputChange}
                                        placeholder="키를 입력하세요"
                                    />
                                </div>
                                <div id="drinking" className="option"> · 음주
                                    <input
                                        id="drinking"
                                        className={`drinking_input ${!data.drinking ? 'empty' : ''}`}
                                        value={newData.drinking}
                                        onChange={handleInputChange}
                                        placeholder="음주 습관을 입력하세요"
                                    />
                                </div>
                                <div id="smoking" className="option"> · 흡연
                                    <input
                                        id="smoking"
                                        className={`smoking_input ${!data.smoking ? 'empty' : ''}`}
                                        value={newData.smoking}
                                        onChange={handleInputChange}
                                        placeholder="흡연 여부를 입력하세요"
                                    />
                                </div>
                            </div>
                     </div>
                    </Tabs>
                </div>
                <div id="navi-con">
                    <div id="navi">
                        <div id="play" onClick={() => handleNavigation('play')}></div>
                        <div id="talk" onClick={() => handleNavigation('talk')}></div>
                        <div id="my" onClick={() => handleNavigation('my')}></div>
                    </div>
                </div>

            </div>
       
    )
}

export default Mypage;