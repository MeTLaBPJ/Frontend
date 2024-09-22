import React from "react";
import { useNavigate } from 'react-router-dom';
import './dialog.css'
import { leaveChatRoom } from '../../../api/chatRoom/leaveChatRoom';
import { sendLeaveMessage, unsubscribeFromRoom } from '../../../api/chatRoom/socket/socketService';

function ExitDialog({ isOpen, onClose, possibleEnterNumber, roomId, socket }) {
    const navigate = useNavigate();
    if (!isOpen) return null;

    const exitRoom = async () => {
        try {
            await leaveChatRoom(roomId);
            sendLeaveMessage(socket, roomId);
            unsubscribeFromRoom(socket, roomId);

            navigate('/chatStartPage');
            onClose();
        } catch (error) {
            console.error("채팅방 나가기 실패:", error);
        }
    }


    return (
        <div className="dialog">
            <div className="dialog-backdrop">
                <div className="dialog-container">
                    <div className="dialog-icon">
                        <svg width="156" height="134" viewBox="0 0 156 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6152 119.587L72.7576 19.4865C74.9162 15.7701 80.2838 15.7701 82.4424 19.4865L140.585 119.587C142.753 123.321 140.06 128 135.742 128H19.4576C15.1402 128 12.4467 123.321 14.6152 119.587Z" stroke="#FF7898" stroke-width="11.2" />
                            <path d="M71.3133 58.509C71.2515 56.6999 72.7013 55.1997 74.5115 55.1997H80.6889C82.4991 55.1997 83.9489 56.6999 83.8871 58.509L82.6836 93.709C82.6247 95.4328 81.2103 96.7997 79.4855 96.7997H75.7149C73.9901 96.7997 72.5757 95.4328 72.5168 93.709L71.3133 58.509Z" fill="#FF7898" />
                            <rect x="72.7998" y="100" width="9.6" height="9.6" rx="3.2" fill="#FF7898" />
                        </svg>

                    </div>
                    <h2 className="dialog-title">정말로 채팅방을 나가시겠어요?</h2>
                    <p className="dialog-message">
                        현재 나의 채팅방 입장 참여 횟수 <span className="highlight-text">{possibleEnterNumber}개</span>
                    </p>
                    <div className="button-container">
                        <button className="dialog-button-cancle" onClick={onClose}>
                            취소하기
                        </button>
                        <button className="dialog-button-pink" onClick={() => exitRoom()}>
                            나가기
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExitDialog;