import api from '../api';

export const roomStart = async (roomId) => {
    try {
        const response = await api.post(`/api/chatroom/active/${roomId}`);
        return response.data.success; // 서버에서 성공 여부를 반환한다고 가정
    } catch (error) {
        console.error('Error starting the room:', error);
        return false;
    }
};