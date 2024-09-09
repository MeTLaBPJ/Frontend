import React, { useState, useEffect } from "react";
import './ChatPage.css'
import EnterCheckPage from './EnterCheckPage'
import NoEnterCheckPage from './NoEnterCheckPage'
import { jwtDecode } from 'jwt-decode';

function ChatStartPage() {

    const [loading, setLoading] = useState(true);

    const [isEnterCheck, setIsEnterClick] = useState(false);
    //유저의 정보를 가져와 성별,입장참여 횟수를 가져온다
    const [possibleEnterNumber, setPossibleEnterNumber] = useState(3);
    const [gender, setGender] = useState("male");


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    throw new Error('No token found');
                }

                // JWT 디코딩
                const decodedToken = jwtDecode(token);
                const email = decodedToken.email; // 토큰에서 이메일 추출

                const response = await fetch(`/api/user/${email}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setGender(data.gender);
                setPossibleEnterNumber(data.ticket)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();

        // 소켓 관련 코드 (예시)
        // const socket = io('http://localhost:3000');
        // socket.on('userUpdate', (updatedUser) => {
        //   setUser(updatedUser);
        // });

        // return () => {
        //   socket.disconnect();
        // };
    }, []);



    // 채팅방 정보를 저장하는 state(예시 백에서 받아와야함)
    //나중에 역순으로 할거?
    const [chatRooms, setChatRooms] = useState([
        {
            id: 1,
            //제목 길이 20자 제한
            title: "채팅방 메인 타이틀아아아아f",
            //서브제목 길이 30자 제한
            subTitle: "sdafasdfadsfjlsadflㅁㄴ어ㅣㄹㄴㅁ이ㅓ리너아리ㅁㄴㅇㄻㄴㅇㄹ",

            //방아이디로 조회한다.
            members: [
                { gender: "Male", major: "Computer Science", studentId: "20210001", nickname: "John", profileImage: "sd" },
                { gender: "Female", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "sd" }
            ],
            maxMembers: 2,
            //입장체크
            enterCheck: false,
        },
        {
            id: 2,
            title: "프로그래밍 기초",
            subTitle: "프로그래밍의 기초를 배워봅시다",
            members: [
                { gender: "Female", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "sd" },
                { gender: "Female", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "Bob", profileImage: "sd" }
            ],
            maxMembers: 4,
            enterCheck: true,
        },
        {
            id: 3,
            title: "프로그래밍 기초",
            subTitle: "프로그래밍의 기초를 배워봅시다",
            members: [
                { gender: "Female", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "sd" },
                { gender: "Male", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
                { gender: "Male", major: "asd", studentId: "20210004", nickname: "Bob", profileImage: "sd" },

            ],
            maxMembers: 6,
            enterCheck: false,
        },
        {
            id: 4,
            title: "프로그래밍 기초",
            subTitle: "프로그래밍의 기초를 배워봅시다",
            members: [
                { gender: "Female", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "sd" },
                { gender: "Male", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
                { gender: "Female", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
                { gender: "Male", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
                { gender: "Female", major: "asd", studentId: "20210004", nickname: "한준서", profileImage: "sd" }
            ],
            maxMembers: 6,
            enterCheck: false,
        }
    ]);




    const makeChatRoom = () => {
        //챗룸 만들기로 이동
    }



    if (loading) return (
        <div className="refresh-indicator"><svg class="refresh-icon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#3D3D3D" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20" /></svg></div>
    );

    return (
        <div className="chatStartPage">
            <img className="logo" src="" alt="logo" />

            <div className="title">
                <div className="title-name">
                    <span className={`enter ${isEnterCheck ? 'one-click' : 'two-click'}`} onClick={() => setIsEnterClick(true)} >참여중</span>
                    <span className={`no-enter ${isEnterCheck ? 'two-click' : 'one-click'}`} onClick={() => setIsEnterClick(false)}>모집중</span>
                </div>
                {isEnterCheck ? <span className="title-span">최대 {possibleEnterNumber}개 방까지 참여 가능합니다</span> : <span></span>}

            </div>

            <div className="chatRoomLists">
                {isEnterCheck ? <EnterCheckPage chatRooms={chatRooms} /> : <NoEnterCheckPage chatRooms={chatRooms} possibleEnterNumber={possibleEnterNumber} gender={gender} />}
            </div>

            <button className="make-chatRoom-button" onClick={() => makeChatRoom()}>
                <span >채팅방 만들기</span>
            </button>
            <div>
                네비바
                <div className="play-nav">

                </div>
                <div className="talk-nav">

                </div>
                <div className="my-nav">

                </div>
            </div>
        </div >
    );
}

export default ChatStartPage;