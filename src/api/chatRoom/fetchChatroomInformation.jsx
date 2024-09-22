import api from '../api';
import { parseISO, format, differenceInDays } from 'date-fns';

export const fetchChatroomInformation = async (roomId) => {
    try {
        const response = await api.get(`/api/chatroom/${roomId}`);
        const { room, possibleEnterNumber, remainingTime } = response.data;

        const endDate = parseISO(remainingTime);
        const formattedDate = format(endDate, 'yyyy년 MM월 dd일');
        const today = new Date();
        const daysLeft = differenceInDays(endDate, today);

        return {
            room,
            possibleEnterNumber,
            remainingTime: formattedDate,
            dDay: daysLeft,
        };
    } catch (error) {
        console.error("Error fetching room data:", error);
        throw error;
    }
};