import axios from 'axios';

const BASE_URL ='http://localhost:8080';

/**
 * 특정 ID의 일기 데이터를 서버로부터 가져오는 함수
 * @returns {Promise<Object>} 서버 응답 데이터
 */
export const getIsNickExist = async (nickname) => {
  try {
    const response = await axios.get(`${BASE_URL}/isExist/${nickname}`,nickname);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching diary data:', error);
    throw error;
  }
};