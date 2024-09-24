import axios from 'axios';
const BASE_URL ='http://localhost:8080';

/**
 * 인증이메일 확인
 * @param {string} email 
 * @param {string} key 
 */

export const postMailCheck = async (email,key) => {
    console.log("전송 데이터",email,key);
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/sign-up/email/check`, 
        {
            email:email,
            key:key
        }
       );
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
  