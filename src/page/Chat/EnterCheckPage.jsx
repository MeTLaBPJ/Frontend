import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './ChatPage.css'
import api from '../../api/api'


function EnterCheckPage(props) {
    const { chatRooms, isEnterCheck } = props;
    const [expandedRoomIds, setExpandedRoomIds] = useState([]);
    const [updatedChatRooms, setUpdatedChatRooms] = useState(
        chatRooms.filter(room => room.enterCheck === true)
    );

    const navigate = useNavigate();

    //새로고침
    const [startY, setStartY] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const threshold = 80; // 새로고침을 트리거하는 기준 거리

    // 새로고침 함수
    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            isEnterCheck(true); // enterCheck를 true로 설정
        }, 1500);
    };

    // 터치 시작
    const handleTouchStart = (event) => {
        setStartY(event.touches[0].clientY);
    };

    // 터치 중일 때
    const handleTouchMove = (event) => {
        const currentY = event.touches[0].clientY;
        const distance = currentY - startY;


        // 스크롤이 최상단일 때만 동작
        if (window.scrollY === 0 && distance > 0) {
            setTranslateY(distance * 0.3); // 끌린 만큼 translateY 값을 설정
        }

        // 기준 거리를 넘었을 때 새로고침
        if (distance > threshold) {
            handleRefresh();
        }
    };

    // 터치 끝
    const handleTouchEnd = () => {
        setTranslateY(0); // 터치가 끝나면 원래 위치로 돌아가기
    };



    //토글확장 관리
    const toggleExpand = (roomId) => {
        setExpandedRoomIds(prevState =>
            prevState.includes(roomId)
                ? prevState.filter(id => id !== roomId)
                : [...prevState, roomId]
        );
        console.log(expandedRoomIds)
    };



    const goChatRoom = () => {
        navigate(`/chat/2`); // 원하는 경로로 이동
    }

    // 시작하기 활성활 될때 클릭가능하게
    const handleButtonClick = (event, room) => {
        if (room.members.length < room.maxMembers) {
            event.stopPropagation(); // 이벤트 버블링을 막음
        }
        else {
            //서버에서 hasStarted true로 설정(api새로 써야됨)

            goChatRoom(room);
        }

    };




    // // expandedRoomIds가 변경될 때마다 서버에서 members를 가져와 업데이트하는 useEffect
    // useEffect(() => {
    //     if (expandedRoomIds.length > 0) {
    //         const fetchRoomDetails = async (roomId) => {
    //             try {
    //                 const response = await api.get(`/api/chat-room/detail/${roomId}`);
    //                 return response.data.members; // 서버로부터 members를 받아옴
    //             } catch (error) {
    //                 console.error(`Error fetching room details for roomId: ${roomId}`, error);
    //                 return [];
    //             }
    //         };

    //         const updateMembers = async () => {
    //             const updatedRooms = await Promise.all(
    //                 chatRooms.map(async (room) => {
    //                     if (room.id === expandedRoomIds[expandedRoomIds.length - 1]) {
    //                         const updatedMembers = await fetchRoomDetails(room.id);
    //                         return { ...room, members: updatedMembers };
    //                     }
    //                     console.log(updatedChatRooms);
    //                     return room;
    //                 })
    //             );

    //             setUpdatedChatRooms(updatedRooms);
    //         };

    //         updateMembers();
    //     }
    // }, [expandedRoomIds,isEnterCheck]); // expandedRoomIds가 변경될 때 reload될 때 마다


    return (
        <div className={`EnterCheckPage ${isRefreshing ? "refreshing" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                transform: `translateY(${translateY}px)`, // 터치 이벤트에 따라 컨테이너가 이동
                transition: isRefreshing ? "transform 0.3s ease" : "none", // 새로고침 시 애니메이션 적용
            }}
        >
            {isRefreshing && <div className="refresh-indicator"><svg class="refresh-icon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#3D3D3D" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20" /></svg></div>}
            {updatedChatRooms
                .map(room => {
                    const maleCount = room.maleCount;
                    const femaleCount = room.femaleCount;

                    const isExpanded = expandedRoomIds.includes(room.id); // 현재 방이 확장되었는지 확인
                    return (
                        <div key={room.id} className="chatRoomList">
                            <div className="chatRoomList-up" onClick={goChatRoom}>
                                <div className="smallCircle">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill={room.members.length === room.maxMembers ? "#FF7898" : "#D9D9D9"} />
                                    </svg>
                                </div>


                                {/* /사진수정/ */}
                                <img className="bigCircle bigCircle-pink" src={room.profileImage} alt="profileImage"></img>
                                <p className="room-title">{room.title}</p>
                                <span className="gender-number">남: {maleCount} 여: {femaleCount}</span>
                                <p className="room-subTitle">{room.subTitle}</p>
                            </div>
                            <div className="members" onClick={() => toggleExpand(room.id)}>
                                <span className={`members-see ${isExpanded ? 'expanded' : null}`} >
                                    참여인원 보기
                                    {!isExpanded ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.27271 4.36353L5.99998 7.63625L2.72725 4.36353" stroke="#3D3D3D" />
                                    </svg> : <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.72729 7.6355L6.00002 4.36277L9.27275 7.6355" stroke="#3D3D3D" />
                                    </svg>
                                    }

                                </span>
                                {/* 확장된 상태일 때만 멤버 리스트를 렌더링 */}
                                <div className={`members-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                    <div className="members-container">
                                        <div className="members-section male">
                                            <h4 className="gender-text">남자</h4>
                                            <ul>
                                                {room.members.filter(member => member.gender === "남자").map((member, index) => (
                                                    <li key={index} className="user-list">
                                                        <img alt=""
                                                            src={member.profileImage} />
                                                        <div className="user-container">
                                                            <span className="major">{member.major}{member.studentId[0] + member.studentId[1]}</span> <span className="nickName">{member.nickname}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="members-section female">
                                            <h4 className="gender-text">여자</h4>
                                            <ul>
                                                {room.members.filter(member => member.gender === "여자").map((member, index) => (
                                                    <li key={index} className="user-list">
                                                        <img alt=""
                                                            src={member.profileImage} />
                                                        <div className="user-container">
                                                            <span className="major">{member.major}{member.studentId[0] + member.studentId[1]}</span> <span className="nickName">{member.nickname}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="startButton-container">
                                        <div className="startButton">
                                            <button
                                                className={` ${room.members.length === room.maxMembers ? 'active' : ''}`}
                                                //채팅을 칠수있게 기능도 활성화 해줌
                                                onClick={(e) => handleButtonClick(e, room)}
                                                disabled={room.members.length < room.maxMembers}
                                            >
                                                <span>시작하기</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}


export default EnterCheckPage;