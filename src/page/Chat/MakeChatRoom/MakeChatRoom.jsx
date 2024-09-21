import React, { useState, useRef } from "react";
import './MakeChatRoom.css'
import { useNavigate } from 'react-router-dom';
import Pic1 from '../../../asset/ChatRoomPic1.png'
import Pic2 from '../../../asset/ChatRoomPic2.png'
import Pic3 from '../../../asset/ChatRoomPic3.png'
import Pic4 from '../../../asset/ChatRoomPic4.png'
import Pic5 from '../../../asset/ChatRoomPic5.png'
import Pic6 from '../../../asset/ChatRoomPic6.png'
import api from '../../../api/api'



function MakeChatRoom() {

    const profileImages = [
        Pic1, Pic2, Pic3, Pic4, Pic5, Pic6
    ]
    const getRandomImage = () => {
        return profileImages[Math.floor(Math.random() * profileImages.length)];
    };

    const navigate = useNavigate();

    const [count, setCount] = useState(3);
    const [roomTitle, setRoomTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');//30자 이내로 제한
    const [profileImage, setProfileImage] = useState(getRandomImage());
    const [error, setError] = useState('');

    const handleNavigation = (destination) => {
        switch (destination) {
            case 'play':
                window.location.reload();
                break;
            case 'talk':
                navigate('/ChatStartPage'); // 페이지 새로고침 (필요에 따라 이 부분을 변경)
                break;
            case 'my':
                navigate('/myPage');
                break;
            default:
                break;
        }
    };

    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleTitleChange = (e) => {
        if (e.target.value.length <= 20) {
            setRoomTitle(e.target.value);
        }
    };

    const handleSubTitleChange = (e) => {
        if (e.target.value.length <= 50) {
            setSubTitle(e.target.value);
        }
    };

    const makeRoom = async () => {
        if (roomTitle === '' || subTitle === '') {
            setError('모든 필드를 입력해 주세요.');
            return;
        }

        try {
            // Calculate the number of members
            const numberOfMembers = count * 2;

            // Send the POST request using axios
            const response = await api.post('api/chatroom', {
                title: roomTitle,
                subTitle: subTitle,
                profileImage: profileImage,
                maxMembers: numberOfMembers,
                maleCount: count,
                femaleCount: count
            });

            if (response.status !== 200) {
                throw new Error('채팅방 생성 실패');
            }

            // 성공적으로 채팅방이 생성되면 다음 페이지로 이동하거나 추가 작업 수행
            console.log("Room Created");
            navigate('/ChatStartPage');
            setError('');
        } catch (error) {
            setError('채팅방 생성 중 오류가 발생했습니다.');
        }
    };




    return (
        <>
            <div className="makeChatRoom">
                <div className="margin-container">
                    <div className="title">
                        <div className="title-name" onClick={() => navigate('/ChatStartPage')} >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 17L8 11L14 5" stroke="#3D3D3D" stroke-width="2" />
                            </svg>

                            채팅방 만들기
                        </div>

                    </div>

                    <div className="small-title">채팅방 정보</div>

                    <div className="chat-room-info">
                        <div className="edit-avatar" onClick={handleImageClick}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.86701 7.65444L1.86692 7.65435L1.86417 7.65728C1.85837 7.66308 1.85263 7.66881 1.84695 7.67448C1.72032 7.80098 1.62433 7.89686 1.55702 8.01574C1.48972 8.13461 1.45688 8.26626 1.41356 8.43993C1.4113 8.44898 1.40902 8.45815 1.4067 8.46744L0.909049 10.458L0.905096 10.4738C0.874669 10.5954 0.845375 10.7125 0.836001 10.8083C0.825919 10.9114 0.831118 11.0594 0.948335 11.1767C1.06555 11.2939 1.21362 11.2991 1.31667 11.289C1.4125 11.2796 1.52957 11.2503 1.65117 11.2199L1.66697 11.216L3.65756 10.7183C3.66685 10.716 3.67602 10.7137 3.68508 10.7114C3.85874 10.6681 3.99039 10.6353 4.10926 10.568C4.22814 10.5007 4.32402 10.4047 4.45052 10.278C4.45712 10.2714 4.46379 10.2648 4.47056 10.258L9.68738 5.04118L9.86612 4.86244L9.87858 4.84998C10.118 4.6106 10.3154 4.41321 10.4506 4.23597C10.5926 4.0499 10.6893 3.85697 10.6893 3.625C10.6893 3.39303 10.5926 3.2001 10.4506 3.01403C10.3154 2.8368 10.118 2.63942 9.8786 2.40005L9.86612 2.38756L9.73744 2.25888L9.72495 2.2464C9.48559 2.00702 9.2882 1.80963 9.11097 1.6744C8.9249 1.53244 8.73197 1.43566 8.5 1.43566C8.26803 1.43566 8.0751 1.53244 7.88903 1.6744C7.7118 1.80963 7.51441 2.00702 7.27504 2.2464L7.26256 2.25888L7.08382 2.43763L1.86701 7.65444Z" stroke="#3D3D3D" stroke-width="0.5" />
                            <path d="M9.5 5L7 2.5" stroke="#3D3D3D" stroke-width="0.5" />
                        </svg>
                        </div>
                        <div className="top">
                            <img alt=""
                                src={profileImage} />
                            <input
                                type="text"
                                placeholder="채팅방 이름을 입력해주세요"
                                className="chat-room-name"
                                value={roomTitle}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <textarea
                            placeholder="채팅방 소개글을 입력해주세요"
                            className="chat-room-description"
                            value={subTitle}
                            onChange={handleSubTitleChange}
                        />
                    </div>

                    <div className="members-settings">
                        <div className="small-title2">인원 설정</div>
                        <div className="gender-settings">
                            <div className="men-count">
                                <span>남자</span>
                                {[2, 3, 4, 5].map(cnt => (
                                    <button
                                        key={cnt}
                                        className={`count-button ${count === cnt ? 'active' : ''}`}
                                        onClick={() => setCount(cnt)}
                                    >
                                        {cnt}명
                                    </button>
                                ))}
                            </div>

                            <div className="women-count">
                                <span>여자</span>
                                {[2, 3, 4, 5].map(cnt => (
                                    <button
                                        key={cnt}
                                        className={`count-button ${count === cnt ? 'active' : ''}`}
                                        onClick={() => setCount(cnt)}
                                    >
                                        {cnt}명
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="note">
                        {/* 로직추가 */}
                        - 생성된 채팅방은 30일 후에 자동으로 종료됩니다.
                    </p>

                    {/* Display error message if needed */}
                    {error && <div className="error"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_51_496)">
                            <circle cx="6" cy="6" r="5.5" fill="white" stroke="#FF3131" />
                            <path d="M5.05547 2.99846C5.02535 2.45622 5.45692 2 6 2C6.54308 2 6.97465 2.45622 6.94453 2.99846L6.70365 7.33436C6.6829 7.70781 6.37402 8 6 8C5.62598 8 5.3171 7.70781 5.29635 7.33436L5.05547 2.99846Z" fill="#FF3131" />
                            <circle cx="6" cy="9.25" r="0.75" fill="#FF3131" />
                        </g>
                        <defs>
                            <clipPath id="clip0_51_496">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        {error}</div>}

                    <button className="create-room-button" onClick={makeRoom}>채팅방 만들기</button>
                </div>

            </div >

            <div id="navi-con">
                <div id="navi">
                    <div id="play" onClick={() => handleNavigation('play')}></div>
                    <div id="talk" onClick={() => handleNavigation('talk')}></div>
                    <div id="my" onClick={() => handleNavigation('my')}></div>
                </div>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }}
                accept="image/*"
            />

        </>
    );
}

export default MakeChatRoom;