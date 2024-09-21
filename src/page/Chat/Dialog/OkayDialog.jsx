import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './dialog.css'

function OkayDialog({ isOpen, onClose, selectChatRoom, possibleEnterNumber }) {
    const navigate = useNavigate();

    if (!isOpen) return null;


    const maxVisibleProfiles = 3;
    const memberLength = selectChatRoom.members.length;
    const members = selectChatRoom.members.slice(0, maxVisibleProfiles);
    const extraProfilesCount = memberLength - maxVisibleProfiles;

    const memberLengthClassName = `member-length-${memberLength}`;



    const goChatRoom = () => {
        navigate(`/chat/2`); // 원하는 경로로 이동
        // navigate(`/chat/${selectChatRoom.id}`); // 원하는 경로로 이동
        //소켓으로 업그레이드 하고 방으로 이동
        onClose();
    }

    return (
        <div className="dialog">
            <div className="dialog-backdrop">
                <div className="dialog-container">
                    <h2 className="dialog-okay-title">채팅방 메인 타이틀에 입장하시겠습니까?</h2>
                    <div className="dialog-icon-container">
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
                    <div className="okayDialog-container">
                        <p className="dialog-message-2">
                            <span>원활한 서비스 이용을 위해</span>
                            <span>동시에 최대 3개의 채팅방을 이용할 수 있습니다</span>
                        </p>
                        <p className="dialog-message okay">
                            현재 나의 채팅방 입장 참여 횟수 <span className="highlight-text">{possibleEnterNumber}개</span>
                        </p>
                    </div>



                    <div className="button-container">
                        <button className="dialog-button-cancle" onClick={onClose}>
                            취소하기
                        </button>
                        <button className="dialog-button-pink" onClick={() => goChatRoom()}>
                            입장하기
                        </button>

                    </div>

                </div>
            </div>
        </div >
    );
}

export default OkayDialog;