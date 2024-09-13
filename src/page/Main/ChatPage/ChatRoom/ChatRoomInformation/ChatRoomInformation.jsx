import React, { useState } from "react";
import { UNSAFE_DataRouterStateContext, useNavigate } from 'react-router-dom';
import '../ChatRoomInformation/ChatRoomInformation.css'
import ExitDialog from '../../Dialog/ExitDialog'
import UserIntroduceDialog from '../../Dialog/UserIntroduceDialog'


function ChatRoomInformation() {
    const navigate = useNavigate();
    const [exitDialog, setExitDialog] = useState(false);


    const goChatRoom = () => {
        navigate('/chat/0');
    };

    const [activeItemPromise, setActiveItemPromise] = useState(null);
    const [activeItemAlarm, setActiveItemAlarm] = useState(null);
    const [activeItemExit, setActiveItemExit] = useState(null);
    const [userIntroduceDialog, setUserIntroduceDialog] = useState(false);
    const [clickUser, setClickUser] = useState();

    const handleClick = (item) => {
        if (item === "promise") {
            if (activeItemPromise) {
                setActiveItemPromise(false);
            } else {
                setActiveItemPromise(true);
            }
        } else if (item === "alarm") {
            if (activeItemAlarm) {
                setActiveItemAlarm(false);
            } else {
                setActiveItemAlarm(true);
            }
        } else if (item === "exit") {
            if (activeItemExit) {
                setActiveItemExit(false);
            } else {
                setActiveItemExit(true);
            }
        }

    };


    const [room, setRoom] = useState({
        id: 1,
        //제목 길이 20자 제한
        title: "채팅방 메인 타이틀아아아아f",
        //서브제목 길이 30자 제한
        subTitle: "sdafasdfadsfjlsadflㅁㄴ어ㅣㄹㄴㅁ이ㅓ리너아리ㅁㄴㅇㄻㄴㅇㄹ",

        //방아이디로 조회한다.
        members: [
            { gender: "Male", major: "Computer Science", studentId: "20210001", nickname: "John", profileImage: "sd" },
            { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }
            , { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }
            , { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }

        ],
        maxMembers: 6,
        //입장체크
        enterCheck: false,

        // 메시지 데이터
        messages: [
            { sender: "John", text: "안녕하세요, 모두들!", time: "13:57", profileImage: "https://example.com/profile1.png" },
            { sender: "Jane", text: "안녕하세요, John!", time: "13:58", profileImage: "https://example.com/profile2.png" },
            { sender: "Emma", text: "모두들 잘 지내시나요?", time: "13:59", profileImage: "https://example.com/profile3.png" },
            { sender: "John", text: "네, 저희 프로젝트가 잘 진행되고 있어요.", time: "14:00", profileImage: "https://example.com/profile1.png" },
            { sender: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:01", profileImage: "https://example.com/profile4.png" },
            { sender: "Jane", text: "좋아요! 저는 디자인을 거의 완료했어요.", time: "14:02", profileImage: "https://example.com/profile2.png" },
            { sender: "Jane", text: "좋아요! 저는 디ㄹㅇ.", time: "14:02", profileImage: "https://example.com/profile2.png" },
            { sender: "John", text: "완성된 디자인을 빨리 보고 싶네요.", time: "14:03", profileImage: "https://example.com/profile1.png" },
            { sender: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:05", profileImage: "https://example.com/profile4.png" },
            { sender: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:05", profileImage: "https://example.com/profile4.png" },
            { sender: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:05", profileImage: "https://example.com/profile4.png" },
            { sender: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:06", profileImage: "https://example.com/profile4.png" },
            { sender: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:06", profileImage: "https://example.com/profile4.png" },


        ]
    })

    const dialogOpen = (user) => {
        setUserIntroduceDialog(true);
        setClickUser(user);
    }




    return (
        <div className="chatRoomInformation">
            <UserIntroduceDialog clickUser={clickUser} isOpen={userIntroduceDialog} onClose={() => setUserIntroduceDialog(false)} />
            <ExitDialog isOpen={exitDialog} onClose={() => setExitDialog(false)} />
            <div className="margin-container">
                <div className="title">
                    <div className="title-name" onClick={() => goChatRoom()}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 17L8 11L14 5" stroke="#3D3D3D" stroke-width="2" />
                        </svg>
                    </div>
                </div>
                {/* 이미지와 채팅방 이름 */}
                <div className="chat-room-header">
                    <img src="/path/to/profile-image.png" alt="Chat Room" className="chat-room-image" />
                    <span className="chat-room-name">채팅방 이름</span>
                </div>

                {/* 버튼들 */}
                <div className="chat-room-actions">
                    {/* 약속 잡기 */}
                    <div
                        className={`action-item ${activeItemPromise ? 'active' : ''}`}
                        onClick={() => handleClick('promise')}
                    >
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="9.5" width="27" height="22.5" rx="2" stroke="#3D3D3D" stroke-width="1.5" />
                            <path d="M5 17L32 17" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M14 24.5H23" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M12.5 5L12.5 11" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M24.5 5L24.5 11" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <span>약속 잡기</span>
                    </div>

                    {/* 알림 끄기 */}
                    <div
                        className={`action-item ${activeItemAlarm ? 'active' : ''}`}
                        onClick={() => handleClick('alarm')}
                    >
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17176 13.4541C9.20697 13.1373 9.22457 12.9789 9.24463 12.8418C9.80435 9.01642 13.0196 6.13866 16.8833 6.0048C17.0218 6 17.1812 6 17.5 6V6C17.8188 6 17.9782 6 18.1167 6.0048C21.9804 6.13866 25.1956 9.01642 25.7554 12.8418C25.7754 12.9789 25.793 13.1373 25.8282 13.4541L26.2059 16.8535C26.3067 17.7603 26.3571 18.2137 26.4572 18.6543C26.5779 19.1855 26.7526 19.7029 26.9785 20.1986C27.1659 20.6098 27.4006 21.001 27.87 21.7834L29.1826 23.971C29.9884 25.3139 30.3912 25.9854 30.104 26.4927C29.8168 27 29.0337 27 27.4676 27H7.53238C5.96627 27 5.18322 27 4.89599 26.4927C4.60876 25.9854 5.01164 25.3139 5.81739 23.971L7.12998 21.7834C7.59942 21.001 7.83415 20.6098 8.0215 20.1986C8.24738 19.7029 8.42205 19.1855 8.54278 18.6543C8.64292 18.2137 8.6933 17.7603 8.79406 16.8535L9.17176 13.4541Z" stroke="#3D3D3D" stroke-width="1.5" />
                            <path d="M13.1533 27.6088C13.4097 28.7251 13.9747 29.7116 14.7606 30.4151C15.5465 31.1187 16.5094 31.5 17.5 31.5C18.4906 31.5 19.4535 31.1187 20.2394 30.4151C21.0253 29.7116 21.5903 28.7251 21.8467 27.6088" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M19.4319 5.85295C19.3179 5.32137 19.0668 4.85164 18.7175 4.51662C18.3682 4.18159 17.9403 4 17.5 4C17.0597 4 16.6318 4.18159 16.2825 4.51662C15.9332 4.85164 15.6821 5.32137 15.5681 5.85295" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        {activeItemAlarm ? <><svg style={{ position: "absolute", top: '242px' }} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.1254 47.0973L45.5562 25.3455" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> <span>알림 키기</span> </> : <span>알림 끄기</span>
                        }

                    </div>

                    {/* 나가기 */}
                    <div
                        className={`action-item`}
                        onClick={() => { handleClick('exit'); setExitDialog(true) }}
                    >
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11V5C22 4.44772 21.5523 4 21 4H7C6.44772 4 6 4.44771 6 5V31C6 31.5523 6.44772 32 7 32H21C21.5523 32 22 31.5523 22 31V25M14 17.5H30.5M30.5 17.5L26 11M30.5 17.5L26 25" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                        <span>나가기</span>
                    </div>
                </div>


                {/* 채팅방 종료 시간 */}
                <div className="chat-room-timer">
                    <span>0일 00시간 00분 후에 채팅방이 종료됩니다</span>
                </div>

                <div className="bar"></div>

                {/* 참여자 목록 */}
                <div className="participant-list">
                    <span className="participant-list-text">참여자 목록</span>
                    <div className="participant-group">
                        <div className="gender">남자</div>
                        <ul>
                            {room.members.filter(member => member.gender === "Male").map((member, index) => (
                                <li key={index} className="user-list" onClick={() => dialogOpen()}>
                                    <img src="" alt="zz" />
                                    <div className="user-container">
                                        <span className="major">{member.major}{member.studentId[0] + member.studentId[1]}</span> <span className="nickName">{member.nickname}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="participant-group">
                        <div className="gender">여자</div>
                        <ul>
                            {room.members.filter(member => member.gender === "Female").map((member, index) => (
                                <li key={index} className="user-list" onClick={() => dialogOpen()}>
                                    <img src="" alt="zz" />
                                    <div className="user-container">
                                        <span className="major">{member.major}{member.studentId[0] + member.studentId[1]}</span> <span className="nickName">{member.nickname}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default ChatRoomInformation;