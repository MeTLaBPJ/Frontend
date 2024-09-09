import React, { useState } from "react";
import '../ChatRoom/ChatRoom.css'
import { useNavigate } from 'react-router-dom';

function ChatRoom() {
    const navigate = useNavigate();


    const [selectChatRoom, setSelectChatRoom] = useState({
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
    })


    const maxVisibleProfiles = 3;
    const memberLength = selectChatRoom.members.length;
    const members = selectChatRoom.members.slice(0, maxVisibleProfiles);
    const extraProfilesCount = memberLength - maxVisibleProfiles;

    const memberLengthClassName = `member-length-${memberLength}`;



    const goChatRoomInformation = () => {
        navigate('/ChatRoomInformation/0')
    }


    return (
        <div className="chatRoom">
            <div className="margin-container">
                <div className="title">
                    <div className="title-name" onClick={() => goChatRoomInformation()}>
                        채팅방이름 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54541 4.09082L11.4545 8.99991L6.54541 13.909" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                    </div>
                    <div className="dialog-icon-container">
                        {members.map((member, index) => (
                            <div key={index} className={`profile-icon-${index} ${memberLengthClassName}`} />//멤버의 프로필 사진 스타일 설정
                        ))}
                        {extraProfilesCount > 0 && (
                            <div className="extra-profile-count" >
                                +{extraProfilesCount}
                            </div>
                        )}

                    </div>
                </div>
                <div className="bar"></div>
                <div className="chat-container">

                </div>





                <div className="text-bar">
                    <div className="text-container">
                        <input type="text" className="text" placeholder="메시지 보내기..." />
                    </div>
                    <div className="send-container">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1644 2.21969C20.3653 2.42056 20.4354 2.71769 20.3456 2.98719L16.8108 13.5915L16.793 13.645C16.1362 15.6155 15.6214 17.1599 15.1196 18.2327C14.64 19.2581 14.0364 20.1705 13.0329 20.3439C12.7229 20.3975 12.4061 20.3975 12.0962 20.3439C11.0927 20.1705 10.489 19.2581 10.0094 18.2327C9.53363 17.2154 9.04609 15.7739 8.43684 13.9472C6.61016 13.338 5.16872 12.8505 4.15142 12.3747C3.12598 11.8951 2.21361 11.2914 2.04017 10.2879C1.98661 9.97797 1.98661 9.66115 2.04017 9.35123C2.21361 8.34772 3.12598 7.74404 4.15141 7.26445C5.22419 6.76272 6.76863 6.24792 8.73911 5.5911L8.79258 5.57328L19.3969 2.03851C19.6664 1.94867 19.9635 2.01882 20.1644 2.21969ZM9.8879 13.5568C10.4913 15.3646 10.9417 16.6855 11.3682 17.5972C11.8551 18.6383 12.1766 18.8356 12.3516 18.8658C12.4925 18.8902 12.6365 18.8902 12.7774 18.8658C12.9524 18.8356 13.274 18.6383 13.7609 17.5972C14.2211 16.6131 14.7094 15.1524 15.3878 13.1172L17.9179 5.52686L9.8879 13.5568ZM16.8572 4.4662L9.26692 6.9963C7.23171 7.67471 5.77096 8.16294 4.78689 8.62319C3.74579 9.11011 3.54851 9.43164 3.51826 9.60668C3.49391 9.74756 3.49391 9.89156 3.51826 10.0324C3.54851 10.2075 3.74579 10.529 4.78689 11.0159C5.6986 11.4423 7.01947 11.8928 8.82724 12.4962L16.8572 4.4662Z" fill="#FF7898" />
                        </svg>
                    </div>

                </div>
            </div >
        </div>
    );
}

export default ChatRoom;