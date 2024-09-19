import React, { useState, useRef, useEffect } from "react";
import '../ChatRoom/ChatRoom.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import api from '../../../../utils/api'
import ChatRoomInformation from "./ChatRoomInformation/ChatRoomInformation";


function ChatRoom() {
    const navigate = useNavigate();

    const chatContainerRef = useRef(null);
    const [inputValue, setInputValue] = useState(''); // 입력된 메시지 저장
    const [messages, setMessages] = useState([]);  // 메시지 리스트 저장
    const stompClientRef = useRef(null);
    const { chatroomId } = useParams();
    const [chatRoomInformation, setChatRoomInformation] = useState(false);


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
            stompClient.send(`/pub/chat.join/${chatroomId}`, {}, JSON.stringify(joinMessage));
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
        title: "프로그래밍 기초",
        //서브제목 길이 30자 제한
        //subTitle: "sdafasdfadsfjlsadflㅁㄴ어ㅣㄹㄴㅁ이ㅓ리너아리ㅁㄴㅇㄻㄴㅇㄹ",

        //방아이디로 조회한다.
        //멤버의 길이 profileImage
        members: [
            { gender: "Female", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "../../../../asset/ChatRoomPic3.png" },
            { gender: "Female", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic4.png" },
            { gender: "Male", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "키키", profileImage: "../../../../asset/ChatRoomPic2.png" },
            { gender: "Male", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "한준서", profileImage: "../../../../asset/ChatRoomPic1.png" }
        ],
        //maxMembers: 6,


        // 메시지 데이터
        messages: [
            { nickname: "Alice", text: "안녕하세요, 모두들! 오늘 회의 시작해볼까요? 지난 주에 논의했던 프로젝트 진행 상황에 대해 이야기 나누면 좋을 것 같아요.", time: "13:57", profileImage: "../../../../asset/ChatRoomPic3.png" },
            { nickname: "Alice", text: "각자 맡은 부분에 대해 간단히 공유해주시면 감사하겠습니다. 특히 어려움을 겪고 있는 부분이 있다면 함께 해결방안을 모색해보면 좋겠어요.", time: "13:57", profileImage: "../../../../asset/ChatRoomPic3.png" },
            { nickname: "Bob", text: "네, 좋습니다. 먼저 지난 주 진행 상황부터 공유해볼까요? 저는 프론트엔드 부분을 맡아 작업 중인데, 반응형 디자인 구현에 약간의 어려움을 겪고 있습니다.", time: "13:58", profileImage: "../../../../asset/ChatRoomPic4.png" },
            { nickname: "키키", text: "저는 데이터베이스 설계를 완료했습니다. ERD 공유드릴게요. 테이블 간의 관계를 최적화하는 데 시간이 좀 걸렸지만, 효율적인 구조를 만들었다고 생각합니다.", time: "13:59", profileImage: "../../../../asset/ChatRoomPic2.png" },
            { nickname: "한준서", text: "와, 키키님 빠르네요! 저는 UI 디자인 초안을 만들었어요. 사용자 경험을 최우선으로 고려했고, 색상 팔레트와 아이콘 세트도 선정했습니다. 피드백 주시면 감사하겠습니다.", time: "14:00", profileImage: "../../../../asset/ChatRoomPic1.png" },
            { nickname: "Alice", text: "모두 열심히 하고 계시네요. 저는 API 문서 작성 중입니다. RESTful 원칙을 따르면서도 우리 프로젝트에 최적화된 엔드포인트를 설계하고 있어요.", time: "14:01", profileImage: "../../../../asset/ChatRoomPic3.png" },
            { nickname: "Bob", text: "좋습니다. 그럼 이번 주 목표를 정해볼까요? 저는 반응형 디자인 문제를 해결하고, 주요 페이지의 레이아웃을 완성하는 것이 목표입니다.", time: "14:02", profileImage: "../../../../asset/ChatRoomPic4.png" },
            { nickname: "키키", text: "네, 저는 이번 주에 백엔드 코딩을 시작하려고 합니다. 주요 API 엔드포인트 구현과 데이터베이스 연동을 목표로 하고 있어요.", time: "14:03", profileImage: "../../../../asset/ChatRoomPic2.png" },
            { nickname: "한준서", text: "저는 UI 디자인 피드백 받고 수정할 예정이에요. 그리고 나서 프로토타입 제작을 시작해 사용자 테스트를 준비하려고 합니다.", time: "14:04", profileImage: "../../../../asset/ChatRoomPic1.png" },
            { nickname: "Alice", text: "API 개발도 이번 주부터 본격적으로 시작하겠습니다. 인증 시스템 구현과 주요 데이터 처리 로직 작성이 이번 주 목표예요.", time: "14:05", profileImage: "../../../../asset/ChatRoomPic3.png" },
            { nickname: "Bob", text: "다들 계획이 구체적이네요. 좋습니다! 서로 진행 상황을 공유하면서 협업하면 더 효율적으로 프로젝트를 진행할 수 있을 것 같아요.", time: "14:06", profileImage: "../../../../asset/ChatRoomPic4.png" },
            { nickname: "키키", text: "그러고 보니 다음 주 중간 발표 준비도 해야 할 것 같아요. 지금까지의 진행 상황을 정리하고 앞으로의 계획도 간략하게 준비해야겠네요.", time: "14:07", profileImage: "../../../../asset/ChatRoomPic2.png" },
            { nickname: "한준서", text: "맞아요. 발표 자료는 제가 만들어볼게요. 각자 맡은 부분에 대한 간단한 요약을 주시면 그걸 바탕으로 발표 자료를 구성하겠습니다.", time: "14:08", profileImage: "../../../../asset/ChatRoomPic1.png" },
            { nickname: "Alice", text: "좋은 생각이에요. 모두 수고 많으셨습니다. 다음 회의는 금요일에 하는 걸로 할까요? 그때까지 각자 목표한 바를 진행하고, 중간 발표 준비도 함께 점검해보면 좋겠어요.", time: "14:09", profileImage: "../../../../asset/ChatRoomPic3.png" },
        ],
        //시작여부
        hasStarted: true

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
        setChatRoomInformation(true)
        //navigate('/goChatRoomInformation/2')
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
                    `/pub/chat.send/${chatroomId}`, // 백엔드의 @MessageMapping에 매핑된 URL
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
            const isCurrentUser = message.nickname === "Alice";

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
                        {formatMessages(selectChatRoom.messages)}
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