import api from '../api';

export const fetchChatRoomFetch = async () => {
    try {
        const response = await api.get(`/api/chat-rooms`);
        if (response.status === 200) {
            return {
                rooms: response.data.rooms,
                possibleEnterNumber: response.data.possibleEnterNumber,
                gender: response.data.gender
            };
        }
    } catch (error) {
        console.error('Error fetching chat rooms:', error);
        throw error;
    }
};