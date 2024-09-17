import React, { useState, useEffect } from "react";
import api from '../../../../utils/api';


function UserIntroduceDialog({ isOpen, onClose, nickname }) {
    //유저의 정보를 받아오는 useEffect 사용
    const [profile, setProfile] = useState({
        profileImage: "",
        nickname: "아아",
        department: "컴공",
        studentId: "202001485",
        shortIntroduce: "안녕하세요",
        mbti: "INFJ",
        height: "180",
        drinking: "소주3병마심",
        smoking: "1갑"
    });


    useEffect(() => {
        const fetchIntroduceItems = async () => {
            try {
                const response = await api.get(`/user/info/${nickname}`);
                if (response.status === 200) {
                    setProfile(response.data);
                }
            } catch (error) {
                console.error('Error fetching diary:', error);
            }
            //  finally {
            //     setLoading(false); // 비동기 작업이 완료되면 로딩 상태를 false로 설정
            // }
        };
        fetchIntroduceItems();

    }, []);





    if (!isOpen) return null;



    return (
        <div className="userIntroduceDialog">
            <div className="dialog-backdrop">
                <div className="dialog-container">
                    <div className="profile-image-container">
                        <img
                            src="https://via.placeholder.com/100"
                            // {profile.profileImage}
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                    <div className="dialog-title">{profile.nickname}</div>
                    <p className="dialog-message">{profile.department} {profile.studentId.slice(1, 3)}학번</p>
                    <div className="introduction-container">
                        <div className="introduction">{profile.shortIntroduce}</div>
                    </div>
                    <div className="additional-info-container">
                        <div className="additional-info">

                            {/* 유저를통한 로직추가 */}
                            <div><div className="first">· MBTI </div><div className="second">{profile.mbti}</div></div>
                            <div><div className="first">· 키 </div><div className="second">{profile.height}</div></div>
                            <div><div className="first">· 음주 </div><div className="second">{profile.drinking}</div></div>
                            <div><div className="first">· 흡연 </div><div className="second">{profile.smoking}</div></div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="dialog-button-cancle" onClick={onClose}>
                            뒤로가기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserIntroduceDialog;