import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

/**
 * @param {string} nickname - 닉네임
 * @returns {Promise<Object>} 서버 응답 데이터
 */
export const getIsNickExist = async (nickname) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/isExist/${nickname}`);
    console.log(response.data);
    return response; // 전체 응답 객체를 반환
  } catch (error) {
    console.error('Error fetching nickname data:', error);
    throw error; // 에러를 호출자에게 전달
  }
};
