import axios from 'axios';
const BASE_URL ='http://localhost:8080';


export const getUser = async (token) => {
    console.log("전송 데이터",token);
    try {
        const response = await axios.get(`${BASE_URL}/api/user/info`,{
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
  