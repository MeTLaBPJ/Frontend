import axios from 'axios';
const BASE_URL ='http://localhost:8080';


export const putUser = async (token, userData) => {
    console.log("전송 데이터",userData,token);
    try {
        const response = await axios.put(`${BASE_URL}/api/user`, userData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }); 
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
  