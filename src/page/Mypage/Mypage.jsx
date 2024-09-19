import React, { useState, useEffect, useRef } from "react";
import Tabs from "./Tabs";
import "./Mypage.css";
import api from "../../utils/api"
import { useNavigate } from "react-router-dom";
import LeaveDialog from "../Main/ChatPage/Dialog/LeaveDialog";




function Mypage() {
    const [shortIntroduce, setShortIntroduce] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [nickName, setNickName] = useState("ㅁㄴㅇㄹ");
    const [major, setMajor] = useState("컴공");
    const [studentId, setStudentId] = useState("202000485");

    const [leaveDialog, setLeaveDialog] = useState(false);

    const [userInfo, setUserInfo] = useState({
        email: "kgs9843@naver.com",
        mbti: null,
        height: null,
        drinking: null,
        smoking: null
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await api.put('/api/user/update', {
                mbti: userInfo.mbti,
                height: userInfo.height,
                drinking: userInfo.drinking,
                smoking: userInfo.smoking,
            });

            if (response.status === 200) {
                console.log('Profile updated successfully');
                // You can add a success message or update UI here
            } else {
                console.error('Failed to update profile');
                // You can add an error message or handle the error here
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            // You can add an error message or handle the error here
        }
    };




    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                setProfileImage(reader.result);
                await uploadProfileImage(file);
            };
            reader.readAsDataURL(file);
        }
    };
    const uploadProfileImage = async (file) => {
        try {
            const formData = new FormData();
            formData.append('profileImage', file);

            const response = await api.put('/api/user/info', formData);

            if (response.status === 200) {
                console.log('Profile image updated successfully');
                // You can add a success message or update UI here
            } else {
                console.error('Failed to update profile image');
                // You can add an error message or handle the error here
            }
        } catch (error) {
            console.error('Error updating profile image:', error);
            // You can add an error message or handle the error here
        }
    };



    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await api.get('/api/user/info');
                if (response.status === 200) {
                    setUserInfo(response.data);
                } else {
                    console.error('Failed to fetch user info');
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleMbtiTest = () => {
        //수정필요
        console.log("mbti test");
    }

    const handleShortIntroduceSubmit = async () => {
        try {
            const response = await api.put('/api/user/update', { subtitle: shortIntroduce });
            if (response.status === 200) {
                console.log('Subtitle updated successfully');
                // You can add a success message or update UI here
            } else {
                console.error('Failed to update subtitle');
                // You can add an error message or handle the error here
            }
        } catch (error) {
            console.error('Error updating subtitle:', error);
            // You can add an error message or handle the error here
        }
        setShortIntroduce("");
    }

    const handleShortIntroduceChange = (e) => {
        setShortIntroduce(e.target.value);
    }

    const handleSecession = () => {
        setLeaveDialog(true);
    }

    return (
        <>
            <LeaveDialog isOpen={leaveDialog} onClose={() => setLeaveDialog(false)} />
            <div className="mypage">
                <div id="title">
                    마이페이지
                </div>
                <div id="profile">
                    <div className="top">

                        <img alt="" id="profile_img"
                            src={profileImage} />
                        <div className="edit-avatar" onClick={handleImageClick}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.86701 7.65444L1.86692 7.65435L1.86417 7.65728C1.85837 7.66308 1.85263 7.66881 1.84695 7.67448C1.72032 7.80098 1.62433 7.89686 1.55702 8.01574C1.48972 8.13461 1.45688 8.26626 1.41356 8.43993C1.4113 8.44898 1.40902 8.45815 1.4067 8.46744L0.909049 10.458L0.905096 10.4738C0.874669 10.5954 0.845375 10.7125 0.836001 10.8083C0.825919 10.9114 0.831118 11.0594 0.948335 11.1767C1.06555 11.2939 1.21362 11.2991 1.31667 11.289C1.4125 11.2796 1.52957 11.2503 1.65117 11.2199L1.66697 11.216L3.65756 10.7183C3.66685 10.716 3.67602 10.7137 3.68508 10.7114C3.85874 10.6681 3.99039 10.6353 4.10926 10.568C4.22814 10.5007 4.32402 10.4047 4.45052 10.278C4.45712 10.2714 4.46379 10.2648 4.47056 10.258L9.68738 5.04118L9.86612 4.86244L9.87858 4.84998C10.118 4.6106 10.3154 4.41321 10.4506 4.23597C10.5926 4.0499 10.6893 3.85697 10.6893 3.625C10.6893 3.39303 10.5926 3.2001 10.4506 3.01403C10.3154 2.8368 10.118 2.63942 9.8786 2.40005L9.86612 2.38756L9.73744 2.25888L9.72495 2.2464C9.48559 2.00702 9.2882 1.80963 9.11097 1.6744C8.9249 1.53244 8.73197 1.43566 8.5 1.43566C8.26803 1.43566 8.0751 1.53244 7.88903 1.6744C7.7118 1.80963 7.51441 2.00702 7.27504 2.2464L7.26256 2.25888L7.08382 2.43763L1.86701 7.65444Z" stroke="#3D3D3D" stroke-width="0.5" />
                            <path d="M9.5 5L7 2.5" stroke="#3D3D3D" stroke-width="0.5" />
                        </svg>
                        </div>
                    </div>
                    <div id="nickname">{nickName}</div>
                    <div id="etc">{major} {studentId.substring(2, 4)}학번</div>
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
                                        value={shortIntroduce}
                                        onChange={handleShortIntroduceChange}
                                    ></input>
                                    <button id="ment_btn" onClick={handleShortIntroduceSubmit}>수정</button>
                                </div>
                            </div>
                            <div id="others">
                                <div id="mbti" className="option">  · MBTI
                                    <div className="option_info">{userInfo.mbti}</div>
                                </div>
                                <div id="height" className="option"> · 키
                                    <div className="option_info">{userInfo.height ? (
                                        <div>{userInfo.height}cm</div>
                                    ) : (
                                        <div></div>
                                    )}</div>
                                </div>
                                <div id="drinking" className="option"> · 음주
                                    <div className="option_info"> {userInfo.drinking}</div>
                                </div>
                                <div id="smoking" className="option"> · 흡연
                                    <div className="option_info">{userInfo.smoking}</div>
                                </div>

                            </div>
                            <div id="email">
                                <div className="option" >· 이메일 </div>
                                <div id="email_info">{userInfo.email}</div>
                            </div>
                            <button id="secession" onClick={handleSecession}>탈퇴하기</button>
                        </div>
                        <div label="내 정보">
                            <div id="profile_info">키워드 사이엔 쉼표(,)로 구분해주세요</div>

                            <div id="email">
                                <div className="option">· 이메일 </div>
                                <div id="email_info">{userInfo.email}</div>
                            </div>

                            <div id="others">
                                <div className="mTitle">프로필
                                    <button id="submit" onClick={handleSubmit}>저장</button>
                                </div>
                                <div id="mbti" className="option">  · MBTI
                                    <input
                                        id="mbti"
                                        className={`mbti_input ${!userInfo.mbti ? 'empty' : ''}`}
                                        value={userInfo.mbti}
                                        onChange={handleInputChange}
                                        placeholder="MBTI를 입력하세요"
                                    />
                                    <button className="mbti-test" onClick={handleMbtiTest}>테스트</button>
                                </div>
                                <div id="height" className="option"> · 키
                                    <input
                                        id="height"
                                        className={`height_input ${!userInfo.height ? 'empty' : ''}`}
                                        value={userInfo.height}
                                        onChange={handleInputChange}
                                        placeholder="키를 입력하세요"
                                    />
                                </div>
                                <div id="drinking" className="option"> · 음주
                                    <input
                                        id="drinking"
                                        className={`drinking_input ${!userInfo.drinking ? 'empty' : ''}`}
                                        value={userInfo.drinking}
                                        onChange={handleInputChange}
                                        placeholder="음주 습관을 입력하세요"
                                    />
                                </div>
                                <div id="smoking" className="option"> · 흡연
                                    <input
                                        id="smoking"
                                        className={`smoking_input ${!userInfo.smoking ? 'empty' : ''}`}
                                        value={userInfo.smoking}
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
                        <div id="play"></div>
                        <div id="talk"></div>
                        <div id="my"></div>
                    </div>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    accept="image/*"
                />
            </div>
        </>
    )
}

export default Mypage;