import api from '../api';

export const fetchMessages = async (chatroomId) => {
    try {
        const response = await api.get(`api/chatroom/${chatroomId}/messages`);
        console.log("SDLKJFLSDJFKLJSDLFJLSDF")
        return response.data;
    } catch (error) {
        console.error("Failed to load chat room data", error);
        throw error;
    }
};