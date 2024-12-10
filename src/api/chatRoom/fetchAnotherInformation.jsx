import api from '../api';

export const fetchAnotherInformation = async (nickname, chatroomId) => {
    try {
        const response = await api.get(`/api/user/info/${nickname}/${chatroomId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};