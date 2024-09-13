import React, { useState } from "react";

function UserIntroduceDialog({ isOpen, onClose, clickUser }) {
    if (!isOpen) return null;
    //유저의 정보를 받아오는 useEffect 사용

    return (
        <div className="userIntroduceDialog">
            <div className="dialog-backdrop">
                <div className="dialog-container">
                    <div className="profile-image-container">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                    <div className="dialog-title">닉네임</div>
                    <p className="dialog-message">컴퓨터공학부 22학번</p>
                    <div className="introduction-container">
                        <div className="introduction">한 줄 소개 안녕하세요~~~</div>
                    </div>
                    <div className="additional-info-container">
                        <div className="additional-info">

                            {/* 유저를통한 로직추가 */}
                            <div><div className="first">· MBTI </div><div className="second">ISFP</div></div>
                            <div><div className="first">· 종교 </div><div className="second">무교</div></div>
                            <div><div className="first">· 음주 </div><div className="second">술마시는걸즐겨요</div></div>
                            <div><div className="first">· 흡연 </div><div className="second">비흡연</div></div>
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