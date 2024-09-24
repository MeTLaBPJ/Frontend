import api from '../api'; // api 인스턴스를 import하세요. 경로는 실제 구조에 맞게 조정해야 합니다.

export const fetchRoomParticipants = async (roomId) => {
    try {
        const response = await api.get(`/api/chatroom/participants/${roomId}`);
        return response.data.members;
    } catch (error) {
        console.error(`Error fetching room details for roomId: ${roomId}`, error);
        return [];
    }
};