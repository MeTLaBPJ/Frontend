import React, { useState, useRef, useEffect } from "react";
import '../ChatRoom/ChatRoom.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import api from '../../../../utils/api'



function ChatRoom() {
    const navigate = useNavigate();

    const chatContainerRef = useRef(null);
    const [inputValue, setInputValue] = useState(''); // 입력된 메시지 저장
    const [messages, setMessages] = useState([]);  // 메시지 리스트 저장
    const stompClientRef = useRef(null);
    const { chatroomId } = useParams();


    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await api.get(`/chatroom/${chatroomId}/messages`);
                setMessages(response.data);
            } catch (error) {
                console.error("Failed to load previous messages", error);
            }
        };

        fetchMessages();

        const socket = new SockJS('/ws');
        const stompClient = Stomp.over(socket);
        stompClientRef.current = stompClient;

        stompClient.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            stompClient.subscribe(`/sub/${chatroomId}`, (message) => {
                const newMessage = JSON.parse(message.body);
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            });

            const joinMessage = {
                content: 'User has joined the chat',
                type: 'JOIN',
            };
            stompClient.send(`/chat.join/${chatroomId}`, {}, JSON.stringify(joinMessage));
        });

        return () => {
            if (stompClientRef.current !== null) {
                stompClientRef.current.disconnect(() => {
                    console.log('Disconnected');
                });
            }
        };
    }, [chatroomId]);







    const [selectChatRoom, setSelectChatRoom] = useState({
        id: 1,
        //제목 길이 20자 제한
        title: "채팅방 메인 타이틀아아아아f",
        //서브제목 길이 30자 제한
        //subTitle: "sdafasdfadsfjlsadflㅁㄴ어ㅣㄹㄴㅁ이ㅓ리너아리ㅁㄴㅇㄻㄴㅇㄹ",

        //방아이디로 조회한다.
        //멤버의 길이 profileImage
        members: [
            { gender: "Male", major: "Computer Science", studentId: "20210001", nickname: "John", profileImage: "sd" },
            { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }
            , { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }
            , { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }

        ],
        //maxMembers: 6,


        // 메시지 데이터
        messages: [
            { nickname: "John", text: "안녕하세요, 모두들!", time: "13:57", profileImage: "https://example.com/profile1.png" },
            { nickname: "Jane", text: "안녕하세요, John!", time: "13:58", profileImage: "https://example.com/profile2.png" },
            { nickname: "Emma", text: "모두들 잘 지내시나요?", time: "13:59", profileImage: "https://example.com/profile3.png" },
            { nickname: "John", text: "네, 저희 프로젝트가 잘 진행되고 있어요.", time: "14:00", profileImage: "https://example.com/profile1.png" },
            { nickname: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:01", profileImage: "https://example.com/profile4.png" },
            { nickname: "Jane", text: "좋아요! 저는 디자인을 거의 완료했어요.", time: "14:02", profileImage: "https://example.com/profile2.png" },
            { nickname: "Jane", text: "좋아요! 저는 디ㄹㅇ.", time: "14:02", profileImage: "https://example.com/profile2.png" },
            { nickname: "John", text: "완성된 디자인을 빨리 보고 싶네요.", time: "14:03", profileImage: "https://example.com/profile1.png" },
            { nickname: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:05", profileImage: "https://example.com/profile4.png" },
            { nickname: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:05", profileImage: "https://example.com/profile4.png" },
            { nickname: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:05", profileImage: "https://example.com/profile4.png" },
            { nickname: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:06", profileImage: "https://example.com/profile4.png" },
            { nickname: "Mike", text: "다들 프로젝트 진행 상황 공유할까요?", time: "14:06", profileImage: "https://example.com/profile4.png" },


        ]
    })


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
    }, [selectChatRoom]); // messages가 변경될 때마다 스크롤을 업데이트




    const goChatRoomInformation = () => {
        navigate('/goChatRoomInformation/0')
    }


    // 메시지 전송 함수
    const sendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                nickname: "John", // 현재 사용자
                text: inputValue,
                time: new Date().toLocaleTimeString(), // 현재 시간
            };


            // setMessages([...messages, newMessage]); // 메시지 리스트에 새 메시지 추가
            // setInputValue(''); // 입력 필드 비우기


            // WebSocket을 통해 메시지 전송
            if (stompClientRef.current && stompClientRef.current.connected) {
                stompClientRef.current.send(
                    `/app/chat.send/${chatroomId}`, // 백엔드의 @MessageMapping에 매핑된 URL
                    {},
                    JSON.stringify(newMessage) // 메시지 객체를 JSON으로 변환
                );
                setInputValue(''); // 입력 필드 비우기
            } else {
                setInputValue(''); // 입력 필드 비우기
                console.error("WebSocket is not connected");
            }
        }
    };

    // Enter 키를 누르면 메시지 전송
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };


    const formatMessages = (messages) => {
        return messages.map((message, index) => {
            // 현재 유저를 받는 로직 추가 해야됨
            const isCurrentUser = message.nickname === "John";

            // 프로필 이미지와 닉네임을 표시할지 여부 결정
            const showProfile = !isCurrentUser &&
                (index === 0 || messages[index - 1].nickname !== message.nickname || messages[index - 1].time !== message.time);

            // 시간 표시할지 여부 결정
            const isLastMessage = index === messages.length - 1;
            const isNextnicknameDifferent = !isLastMessage && messages[index + 1].nickname !== message.nickname;
            const isNextTimeDifferent = !isLastMessage && messages[index + 1].time !== message.time;
            const showTime = isLastMessage || isNextnicknameDifferent || isNextTimeDifferent;

            return (
                <div className={`message-group ${isCurrentUser ? 'sent' : 'noSent'}`} key={index}>
                    {showProfile ?
                        <img
                            src={message.profileImage}
                            alt={`${message.nickname}'s profile`}
                            className="profile-icon"
                        /> : <div className="no-see"></div>
                    }
                    <div className={`message-box ${isCurrentUser ? 'sent' : 'noSent'}  ${!showProfile ? 'no-see-box' : null}`}>
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
                    {formatMessages(selectChatRoom.messages)}
                </div>


                <div className="text-bar">
                    <div className="text-container">
                        <input type="text" className="text"
                            placeholder="메시지 보내기..."
                            value={inputValue} // 입력 필드 값 바인딩
                            onChange={(e) => setInputValue(e.target.value)} // 입력된 값 업데이트
                            onKeyDown={handleKeyPress} // Enter 키 처리
                        />
                    </div>
                    <div className="send-container" onClick={sendMessage}>
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