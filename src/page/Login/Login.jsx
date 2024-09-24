import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { postLogin } from "../../api/postLogin";
import './Login.css';

// 로그인
const Login = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleNext = async () => {
        if (password.trim() === "") {
            setError("비밀번호를 입력해주세요.");
            return;
        }

        const storedEmail = localStorage.getItem('userEmail');
        const logindata = {
            schoolEmail: storedEmail,
            password: password
        }
        try {
            const loginResponse = await postLogin(logindata);
            console.log("로그인 응답:", loginResponse); // 전체 응답 출력
            // 응답에서 액세스 토큰 추출
            // 이곳에서 loginResponse.headers를 제대로 접근할 수 있는지 확인
            const accessToken = loginResponse.headers?.authorization; // Optional chaining 추가
            if (!accessToken) {
                throw new Error("Access token not found in response headers");
            }

            const token = accessToken.split(' ')[1]; // 'Bearer ' 제거

            localStorage.setItem('accessToken', token);
            navigate('/ChatStartPage');
        } catch (error) {
            console.error('Error posting email data:', error);
        }

    };

    const handleBack = () => {
        navigate('/'); // 이전 페이지로 이동
    };

    return (
        <div className="LoginPage">
             <div className="container">
                
                <header className="header">
                    <button className="back-button" onClick={handleBack}>
                        <IoChevronBack />
                    </button>
                </header>

               
                <h2 className="login-heading">비밀번호를 입력해주세요</h2>
                <p className="login-subtext">가입하실 때 설정한 비밀번호를 입력하세요</p>

                <input
                    className="password-input"
                    type="password"
                    placeholder="1234abc!"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(""); // 에러 메시지 초기화
                    }}
                />
                {error && (
                    <p className="error-message">{error}</p> // 에러 메시지 출력
                )}

                <div className="button-container">
                <button
                    className="bottom-Button"
                    disabled={password.trim() === ""}
                    onClick={handleNext}
                >
                    로그인
                </button>
                </div>
                </div>
            </div>
    );
};

export default Login;