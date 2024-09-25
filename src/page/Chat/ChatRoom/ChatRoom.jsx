import React, { useState, useRef, useEffect, useCallback } from "react";
import './ChatRoom.css'
import { useParams } from 'react-router-dom';
import ChatRoomInformation from "./ChatRoomInformation/ChatRoomInformation";
import { fetchMessages } from "../../../api/chatRoom/fetchMessages";


import { connectWebSocket, disconnectWebSocket, sendMessageHandler } from "../../../api/chatRoom/socket/socketService";

function ChatRoom() {



    const [selectChatRoom, setSelectChatRoom] = useState({
        id: 2,
        title: "심리학과 MT 같이 갈 사람?",
        members: [
            { gender: "여자", major: "심리학과", studentId: "20190228", nickname: "마음읽기", profileImage: "../../../../asset/ChatRoomPic3.png" },
            { gender: "여자", major: "심리학과", studentId: "20200517", nickname: "프로이트", profileImage: "../../../../asset/ChatRoomPic4.png" },
            { gender: "남자", major: "심리학과", studentId: "20210405", nickname: "융학도", profileImage: "../../../../asset/ChatRoomPic4.png" },
            { gender: "남자", major: "심리학과", studentId: "20220112", nickname: "심리학도사", profileImage: "../../../../asset/ChatRoomPic4.png" }
        ],
        hasStarted: true
    })

    // 현재 유저
    const [selectUser, setSelectUser] = useState({
        nickname: "융학도",
        profileImage: "../../../../asset/ChatRoomPic4.png"
    })


    const chatContainerRef = useRef(null);
    const [inputValue, setInputValue] = useState(''); // 입력된 메시지 저장

    const [messages, setMessages] = useState([
        { nickname: "마음읽기", text: "안녕하세요, 여러분! 다음 주 금요일 MT에 대해 이야기 나눠볼까요?", time: "13:57", profileImage: "../../../../asset/ChatRoomPic3.png" },
        { nickname: "프로이트", text: "네, 좋습니다. MT 장소는 어디로 정했나요?", time: "13:58", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "융학도", text: "저는 계곡이 있는 곳으로 가면 좋을 것 같아요. 자연 속에서 힐링할 수 있잖아요.", time: "13:59", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "심리학도사", text: "좋은 생각이에요! 계곡 근처 펜션은 어떨까요? 바비큐도 할 수 있고요.", time: "14:00", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "마음읽기", text: "다들 좋은 의견 감사합니다. 제가 몇 군데 알아본 곳이 있는데, 링크 공유해드릴게요.", time: "14:01", profileImage: "../../../../asset/ChatRoomPic3.png" },
        { nickname: "프로이트", text: "감사합니다! 그리고 MT 프로그램은 어떻게 구성할까요?", time: "14:02", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "융학도", text: "심리학과니까 심리 게임이나 활동을 해보는 건 어떨까요? 서로를 더 잘 이해할 수 있을 것 같아요.", time: "14:03", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "심리학도사", text: "오, 그거 재밌겠어요! 제가 몇 가지 아이디어를 준비해올게요.", time: "14:04", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "마음읽기", text: "좋습니다! 그럼 장소는 제가 공유한 링크 중에서 골라보고, 프로그램은 심리학도사님이 아이디어 주시면 함께 구체화해보는 걸로 할까요?", time: "14:05", profileImage: "../../../../asset/ChatRoomPic3.png" },
        { nickname: "프로이트", text: "네, 좋아요. 그리고 음식은 어떻게 준비할까요? 각자 조금씩 나눠서 준비할까요, 아니면 다 같이 장 보러 갈까요?", time: "14:06", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "융학도", text: "다 같이 장 보러 가는 것도 재밌을 것 같아요! 준비하는 과정부터 추억을 만들 수 있잖아요.", time: "14:07", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "심리학도사", text: "동의합니다! 장 보러 갈 때 역할 분담해서 효율적으로 준비해봐요.", time: "14:08", profileImage: "../../../../asset/ChatRoomPic4.png" },
        { nickname: "마음읽기", text: "모두 좋은 의견 감사합니다. 그럼 정리해볼게요. 1) 장소는 제가 공유한 링크에서 선택, 2) 프로그램은 심리학도사님 아이디어 바탕으로 구체화, 3) 음식은 다 같이 장 보기. 이렇게 하면 될까요?", time: "14:09", profileImage: "../../../../asset/ChatRoomPic3.png" },
    ]);
    // 메시지 리스트 저장
    const stompClientRef = useRef(null);
    const { chatroomId } = useParams();
    const [chatRoomInformation, setChatRoomInformation] = useState(false);
    const reconnectIntervalRef = useRef(null);

    const handleMessageReceived = useCallback((newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, []);



    // useEffect(() => {
    //     const fetchDataMsg = async () => {
    //         //메시지 받아오는 부분
    //         try {
    //             const data = await fetchMessages(chatroomId);
    //             setMessages(data.messages);
    //             setSelectChatRoom(data.chatRoom);
    //             setSelectUser(data.user);
    //         } catch (error) {
    //             console.error("Failed to load chat room data", error);
    //         }
    //     };

    //     fetchDataMsg();

    //     const storedConnectionStatus = localStorage.getItem(`chatroom_${chatroomId}_connected`);

    //     if (storedConnectionStatus !== 'true') {
    //         stompClientRef.current = connectWebSocket(chatroomId, handleMessageReceived);
    //     }

    //     // Set up periodic connection check
    //     reconnectIntervalRef.current = setInterval(() => {
    //         if (stompClientRef.current && !stompClientRef.current.connected) {
    //             console.log('Connection lost. Attempting to reconnect...');
    //             stompClientRef.current = connectWebSocket(chatroomId, handleMessageReceived);
    //         }
    //     }, 30000); // Check every 30 seconds

    //     return () => {
    //         disconnectWebSocket();
    //         clearInterval(reconnectIntervalRef.current);
    //     };
    // }, [chatroomId, handleMessageReceived]);;


    const sendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                nickname: selectUser.nickname,
                text: inputValue,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
                profileImage: selectUser.profileImage
            };

            setMessages(prevMessages => [...prevMessages, newMessage]);
            // sendMessageHandler(chatroomId, newMessage);
            setInputValue('');
        }
    };



    const maxVisibleProfiles = 3;
    const memberLength = selectChatRoom.members.length;
    const members = selectChatRoom.members.slice(0, maxVisibleProfiles);
    const extraProfilesCount = memberLength - maxVisibleProfiles;

    const memberLengthClassName = `member-length-${memberLength}`;



    // 컴포넌트가 처음 렌더링되거나 messages가 업데이트될 때 스크롤을 아래로 이동
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]); // messages가 변경될 때마다 스크롤을 업데이트




    const goChatRoomInformation = () => {
        setChatRoomInformation(true)
    }



    // Enter 키를 누르면 메시지 전송
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };


    const formatMessages = (messages) => {
        return messages.map((message, index) => {
            // 현재 유저를 받는 로직 추가 해야됨
            const isCurrentUser = message.nickname === selectUser.nickname;

            // 프로필 이미지와 닉네임을 표시할지 여부 결정
            const showProfile = !isCurrentUser &&
                (index === 0 || messages[index - 1].nickname !== message.nickname || messages[index - 1].time !== message.time);

            // 시간 표시할지 여부 결정
            const isLastMessage = index === messages.length - 1;
            const isNextnicknameDifferent = !isLastMessage && messages[index + 1].nickname !== message.nickname;
            const isNextTimeDifferent = !isLastMessage && messages[index + 1].time !== message.time;
            const showTime = isLastMessage || isNextnicknameDifferent || isNextTimeDifferent;

            const isPreviousMessageSameUser = index > 0 && messages[index - 1].nickname === message.nickname;

            return (
                <div className={`message-group ${isCurrentUser ? 'sent' : 'noSent'} ${isPreviousMessageSameUser ? 'same-user' : ''}`} key={index}>
                    {showProfile ?
                        <img
                            src={message.profileImage}
                            alt={`${message.nickname}'s profile`}
                            className="profile-icon"
                        /> : <div className={`no-see ${isPreviousMessageSameUser ? 'same-user' : ''}`}></div>
                    }
                    <div className={`message-box ${isCurrentUser ? 'sent' : 'noSent'} ${!showProfile ? 'no-see-box' : ''} ${isPreviousMessageSameUser ? 'same-user' : ''}`}>
                        {showProfile && (<span className="chat-nickName">{message.nickname}</span>)}
                        <div className="message-time-box">
                            <div className={`message ${isCurrentUser ? 'sent' : 'noSent'}`}>
                                {message.text}
                            </div>
                            {showTime && (
                                <div className={`message-time ${isCurrentUser ? 'sent' : 'noSent'}`}>{message.time}</div>
                            )}
                        </div>
                    </div>
                </div>
            );
        });
    };


    if (chatRoomInformation) {
        return (
            <ChatRoomInformation
                roomId={chatroomId}
                socket={stompClientRef.current}
                chatRoomInformation={(value) => setChatRoomInformation(value)}
            />
        )
    }
    else {
        return (
            <div className="chatRoom">
                <div className="margin-container">
                    <div className="title">
                        <div className="title-name" onClick={() => goChatRoomInformation()}>
                            {selectChatRoom.title} <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.54541 4.09082L11.4545 8.99991L6.54541 13.909" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div className="dialog-icon-container" onClick={() => goChatRoomInformation()}>
                            {members.map((member, index) => (
                                <div
                                    key={index}
                                    className={`profile-icon-${index} ${memberLengthClassName}`}
                                    style={{
                                        backgroundImage: (index === 2 && extraProfilesCount > 0) ? '' : `url(${member.profileImage})`
                                    }}
                                />
                            ))}
                            {extraProfilesCount > 0 && (
                                <div className="extra-profile-count" >
                                    +{extraProfilesCount}
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="bar"></div>


                    <div className="chat-container" ref={chatContainerRef}>
                        {formatMessages(messages)}
                    </div>


                    <div className="text-bar">
                        <div className="text-container">
                            {selectChatRoom.hasStarted ? <input type="text" className="text"
                                placeholder="메시지 보내기..."
                                value={inputValue} // 입력 필드 값 바인딩
                                onChange={(e) => setInputValue(e.target.value)} // 입력된 값 업데이트
                                onKeyDown={handleKeyPress} // Enter 키 처리
                            /> : <input type="text" className="text"
                                disabled={true}
                                placeholder="⋇ 멤버가 다 참석해야 채팅이 가능합니다!"
                            />}

                        </div>
                        {selectChatRoom.hasStarted && inputValue.trim() ? (
                            <div className="send-container" onClick={sendMessage}>
                                <svg className="svg-click" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1644 2.21969C20.3653 2.42056 20.4354 2.71769 20.3456 2.98719L16.8108 13.5915L16.793 13.645C16.1362 15.6155 15.6214 17.1599 15.1196 18.2327C14.64 19.2581 14.0364 20.1705 13.0329 20.3439C12.7229 20.3975 12.4061 20.3975 12.0962 20.3439C11.0927 20.1705 10.489 19.2581 10.0094 18.2327C9.53363 17.2154 9.04609 15.7739 8.43684 13.9472C6.61016 13.338 5.16872 12.8505 4.15142 12.3747C3.12598 11.8951 2.21361 11.2914 2.04017 10.2879C1.98661 9.97797 1.98661 9.66115 2.04017 9.35123C2.21361 8.34772 3.12598 7.74404 4.15141 7.26445C5.22419 6.76272 6.76863 6.24792 8.73911 5.5911L8.79258 5.57328L19.3969 2.03851C19.6664 1.94867 19.9635 2.01882 20.1644 2.21969ZM9.8879 13.5568C10.4913 15.3646 10.9417 16.6855 11.3682 17.5972C11.8551 18.6383 12.1766 18.8356 12.3516 18.8658C12.4925 18.8902 12.6365 18.8902 12.7774 18.8658C12.9524 18.8356 13.274 18.6383 13.7609 17.5972C14.2211 16.6131 14.7094 15.1524 15.3878 13.1172L17.9179 5.52686L9.8879 13.5568ZM16.8572 4.4662L9.26692 6.9963C7.23171 7.67471 5.77096 8.16294 4.78689 8.62319C3.74579 9.11011 3.54851 9.43164 3.51826 9.60668C3.49391 9.74756 3.49391 9.89156 3.51826 10.0324C3.54851 10.2075 3.74579 10.529 4.78689 11.0159C5.6986 11.4423 7.01947 11.8928 8.82724 12.4962L16.8572 4.4662Z" fill="#FF7898" />
                                </svg>
                            </div>
                        ) : (
                            <div className="send-container">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1644 2.21969C20.3653 2.42056 20.4354 2.71769 20.3456 2.98719L16.8108 13.5915L16.793 13.645C16.1362 15.6155 15.6214 17.1599 15.1196 18.2327C14.64 19.2581 14.0364 20.1705 13.0329 20.3439C12.7229 20.3975 12.4061 20.3975 12.0962 20.3439C11.0927 20.1705 10.489 19.2581 10.0094 18.2327C9.53363 17.2154 9.04609 15.7739 8.43684 13.9472C6.61016 13.338 5.16872 12.8505 4.15142 12.3747C3.12598 11.8951 2.21361 11.2914 2.04017 10.2879C1.98661 9.97797 1.98661 9.66115 2.04017 9.35123C2.21361 8.34772 3.12598 7.74404 4.15141 7.26445C5.22419 6.76272 6.76863 6.24792 8.73911 5.5911L8.79258 5.57328L19.3969 2.03851C19.6664 1.94867 19.9635 2.01882 20.1644 2.21969ZM9.8879 13.5568C10.4913 15.3646 10.9417 16.6855 11.3682 17.5972C11.8551 18.6383 12.1766 18.8356 12.3516 18.8658C12.4925 18.8902 12.6365 18.8902 12.7774 18.8658C12.9524 18.8356 13.274 18.6383 13.7609 17.5972C14.2211 16.6131 14.7094 15.1524 15.3878 13.1172L17.9179 5.52686L9.8879 13.5568ZM16.8572 4.4662L9.26692 6.9963C7.23171 7.67471 5.77096 8.16294 4.78689 8.62319C3.74579 9.11011 3.54851 9.43164 3.51826 9.60668C3.49391 9.74756 3.49391 9.89156 3.51826 10.0324C3.54851 10.2075 3.74579 10.529 4.78689 11.0159C5.6986 11.4423 7.01947 11.8928 8.82724 12.4962L16.8572 4.4662Z" fill="#FF7898" />
                                </svg>
                            </div>
                        )}


                    </div>
                </div >
            </div>
        )
    }
}

export default ChatRoom;