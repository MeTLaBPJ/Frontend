import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://localhost:8080';

/**
 * 인증 이메일 전송
 * @param {Object} userData - 로그인 데이터
 */

export const postLogin = async (loginData) => {
    console.log("전송 데이터", loginData);
    try {
        const response = await axios.post(`${BASE_URL}/api/users/login`, qs.stringify(loginData), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            withCredentials: true,
        });
        console.log(response);
        return response;
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
