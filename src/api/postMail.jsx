import axios from 'axios';
const BASE_URL ='http://localhost:8080';

/**
 * 인증이메일 전송
 * @param {string} email - 일기 내용
 */

export const postMail = async (email) => {
    console.log("전송 데이터",email);
    try {
      const response = await axios.post(`${BASE_URL}/sign-up/email?email=${email}`, email );
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
  