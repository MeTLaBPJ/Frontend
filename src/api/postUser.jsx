import axios from 'axios';
const BASE_URL ='http://localhost:8080';

/**
 * 인증이메일 전송
 * @param {Object} userData - 일기 내용
 */

export const postUser = async (userData) => {
    console.log("전송 데이터",userData);
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/sign-up`, userData );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error('Error response:', status, data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  };
  