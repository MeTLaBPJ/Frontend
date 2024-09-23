import React, { useState, useEffect } from "react";
import './ChatPage.css'
import EnterCheckPage from './EnterCheckPage'
import NoEnterCheckPage from './NoEnterCheckPage'
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/logo.png'
import { fetchChatRoomFetch } from '../../api/chatRoom/fetchChatRoomFetch'

function ChatStartPage() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [isEnterCheck, setIsEnterClick] = useState(false);
    //유저의 정보를 가져와 성별,입장참여 횟수를 가져온다
    const [possibleEnterNumber, setPossibleEnterNumber] = useState(3);
    const [gender, setGender] = useState("남자");


    const handleNavigation = (destination) => {
        switch (destination) {
            case 'play':
                navigate('/mbti');
                break;
            case 'talk':
                window.location.reload(); // 페이지 새로고침 (필요에 따라 이 부분을 변경)
                break;
            case 'my':
                navigate('/myPage');
                break;
            default:
                break;
        }
    };


    // 채팅방 정보를 저장하는 state(예시 백에서 받아와야함)
    //나중에 역순으로 할거?
    const [chatRooms, setChatRooms] = useState([
        {
            id: 1,
            //제목 길이 20자 제한
            title: "채팅방 메인 타이틀아아아아f",
            //서브제목 길이 30자 제한
            subTitle: "dddddddddddddddddddddddddddddddddddddddddddddddddd",

            //방아이디로 조회한다.

            //나중에 서버로 부터 바는 member이기 때문에 삭제!
            members: [
                { gender: "남자", major: "Computer Science", studentId: "20210001", nickname: "John", profileImage: "../../../../asset/ChatRoomPic1.png" },
                { gender: "여자", major: "Design", studentId: "20210002", nickname: "Jane", profileImage: "../../../../asset/ChatRoomPic2.png" }
            ],
            maxMembers: 2,
            //입장체크
            enterCheck: false,
            host: "asdfasdf1234346",
            maleCount: 1,
            femaleCount: 1,
            profileImage: '../../../../asset/ChatRoomPic1.png',
            status: "Waiting"
        },
        {
            id: 2,
            title: "프로그래밍 기초",
            subTitle: "프로그래밍의 기초를 배워봅시다",
            members: [
                { gender: "여자", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "../../../../asset/ChatRoomPic3.png" },
                { gender: "여자", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic4.png" },
                { gender: "남자", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic4.png" },
                { gender: "남자", major: "Mathematicasdfasdfdassdfsssadfsdf", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic4.png" }
            ],
            maxMembers: 4,
            enterCheck: true,
            host: "asdfasdf1234346",
            maleCount: 2,
            femaleCount: 2,
            profileImage: '../../../../asset/ChatRoomPic1.png',
            status: "Waiting"
        },
        {
            id: 3,
            title: "프로그래밍 기초",
            subTitle: "프로그래밍의 기초를 배워봅시다",
            members: [
                { gender: "여자", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "../../../../asset/ChatRoomPic4.png" },
                { gender: "남자", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic5.png" },
                { gender: "남자", major: "asd", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic6.png" },

            ],
            maxMembers: 6,
            enterCheck: false,
            host: "asdfasdf1234346",
            maleCount: 2,
            femaleCount: 1,
            profileImage: '../../../../asset/ChatRoomPic1.png',
            status: "Waiting"
        },
        {
            id: 4,
            title: "프로그래밍 기초",
            subTitle: "프로그래밍의 기초를 배워봅시다",
            //사진경로 절대경로로 수정
            members: [
                { gender: "여자", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "../../../../asset/ChatRoomPic3.png" },
                { gender: "남자", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic2.png" },
                { gender: "여자", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic6.png" },
                { gender: "남자", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "../../../../asset/ChatRoomPic1.png" },
                { gender: "여자", major: "asd", studentId: "20210004", nickname: "한준서", profileImage: "../../../../asset/ChatRoomPic5.png" }
            ],
            maxMembers: 6,
            enterCheck: false,
            host: "asdfasdf1234346",
            maleCount: 2,
            femaleCount: 3,
            profileImage: '../../../../asset/ChatRoomPic1.png',
            status: "Waiting"
        }
    ]);


    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const data = await fetchChatRoomFetch();
                setChatRooms(data.rooms);
                setPossibleEnterNumber(data.possibleEnterNumber);
                setGender(data.gender);
            } catch (error) {
                console.error('Error fetching chat rooms:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChatRooms();
    }, []);








    const makeChatRoom = () => {
        //챗룸 만들기로 이동
        navigate('/makeChatRoom')
    }



    if (loading) return (
        <div className="refresh-indicator">
            <svg className="refresh-icon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                <path fill="#3D3D3D" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20" />
            </svg>
        </div>
    );

    return (
        <div className="chatStartPage">
            <div className="margin-container">
                <div
                    className="logo"
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                />

                <div className="title">
                    <div className="title-name">
                        <span className={`enter ${isEnterCheck ? 'one-click' : 'two-click'}`} onClick={() => setIsEnterClick(true)} >참여중</span>
                        <span className={`no-enter ${isEnterCheck ? 'two-click' : 'one-click'}`} onClick={() => setIsEnterClick(false)}>모집중</span>
                    </div>
                    {isEnterCheck ? <span className="title-span">최대 {possibleEnterNumber}개 방까지 참여 가능합니다</span> : <span></span>}

                </div>

                <div className="chatRoomLists">
                    {isEnterCheck ? (
                        <EnterCheckPage
                            chatRooms={chatRooms}
                            isEnterCheck={(value) => setIsEnterClick(value)}
                        />
                    ) : (
                        <NoEnterCheckPage
                            chatRooms={chatRooms}
                            possibleEnterNumber={possibleEnterNumber}
                            gender={gender}
                            isEnterCheck={(value) => setIsEnterClick(value)}
                        />
                    )}
                </div>

                <button
                    className={`make-chatRoom-button ${possibleEnterNumber === 0 ? 'disabled' : ''}`}
                    onClick={() => possibleEnterNumber > 0 && makeChatRoom()}
                    disabled={possibleEnterNumber === 0}
                >
                    <span>채팅방 만들기</span>
                </button>

            </div >
            <div id="navi-con">
                <div id="navi">
                    <div id="play" onClick={() => handleNavigation('play')}></div>
                    <div id="talk" onClick={() => handleNavigation('talk')}></div>
                    <div id="my" onClick={() => handleNavigation('my')}></div>
                </div>
            </div>
        </div>
    );
}

export default ChatStartPage;