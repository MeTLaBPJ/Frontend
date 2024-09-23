import api from '../api';

export const makeChatRoom = async (roomData) => {
    try {
        const response = await api.post('/api/chatroom', roomData);
        if (response.status !== 200) {
            throw new Error('채팅방 생성 실패');
        }
        return response.data;
    } catch (error) {
        throw new Error('채팅방 생성 중 오류가 발생했습니다.');
    }
};