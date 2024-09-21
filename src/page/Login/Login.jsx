import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import './Login.css';

// 로그인
const Login = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        if (password.trim() === "") {
            setError("비밀번호를 입력해주세요.");
            return;
        }

        // localStorage에 저장된 비밀번호 가져오기
        const storedPassword = localStorage.getItem('password');

        // 비밀번호 검증 후 페이지 이동
        if (storedPassword && password === storedPassword) {
            navigate('/ChatStartPage');  // 비밀번호가 맞으면 ChatStartPage로 이동
        } else {
            setError("올바른 비밀번호를 입력해 주세요.");  // 비밀번호가 틀리면 오류 메시지
        }
    };

    const handleBack = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div className="Login1Page">
            <div>
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

                <button
                    className="bottom-Button"
                    disabled={password.trim() === ""}
                    onClick={handleNext}
                >
                    로그인
                </button>
            </div>
        </div>
    );
};

export default Login;