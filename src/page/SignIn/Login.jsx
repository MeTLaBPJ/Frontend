import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../LoginPage/Main.css';



// 닉네임 설정 
const Login = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleNext = async () => {
        if (password.trim() === "") {
            setError("비밀번호를 입력해주세요.");
            return;
        }

        const nickname = localStorage.getItem('nickname');

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                nickname: nickname,
                password: password
            });

            if (response.data.success) {
                navigate('/ChatStartPage'); // 시작화면으로 네비게이트
            } else {
                navigate('/ChatStartPage'); // 시작화면으로 네비게이트
                setError("아이디 또는 비밀번호가 일치하지 않습니다.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className="start-page">
            <div>
                <h2 className="login-heading">비밀번호를 입력해주세요</h2>
                <p className="login-subtext">가입하실 때 설정한 비밀번호를 입력하세요</p>

                <input
                    className="login4-input"
                    type="password"
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                />

                {error && <p className="error-message">{error}</p>}

                <button
                    className="bottom-Button"
                    disabled={password.trim() === ""}
                    onClick={handleNext}
                >
                    로그인하기
                </button>
            </div>
        </div>
    );
};

export default Login;