import api from '../api';

export const leaveChatRoom = async (roomId) => {
    try {
        await api.delete(`/api/chatroom/${roomId}`);
    } catch (error) {
        console.error("채팅방 나가기 API 요청 실패:", error);
        throw error;
    }
};