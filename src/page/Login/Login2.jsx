import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { IoChevronBack } from "react-icons/io5"; 
import { postMailCheck } from "../../api/postMailCheck";
import { postMail } from "../../api/postMail";
import { UserContext } from "../../context/UserContext";
import './Login.css'; 

// 메일 인증 / 인증번호 입력 
const Login2 = () => {
    const { User, updateUser } = useContext(UserContext);
    const [code, setCode] = useState(new Array(6).fill("")); // 6자리 코드 입력 관리
    const navigate = useNavigate(); 
    const [email, setEmail] = useState(""); // 세션 스토리지에서 가져올 이메일 상태

    useEffect(() => {
        // 로컬 스토리지에서 이메일 값을 불러옵니다.
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            if (User.email !== storedEmail) { // 이메일이 다를 경우에만 업데이트
                updateUser({ email: storedEmail }); // Context에 이메일 업데이트
            }
        }
    }, [User.email, updateUser]); // User.email을 의존성으로 추가

    const handleInputChange = (element, index) => {
        let newCode = [...code];
        const inputValue = element.value;
    
        // 사용자가 입력을 했을 때
        newCode[index] = inputValue;
        setCode(newCode);
    
        // 입력 후 다음 필드로 이동
        if (inputValue && element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    
    const handleKeyDown = (event, index) => {
        // 백스페이스 키가 눌렸을 때
        if (event.key === 'Backspace' && code[index] === "") {
            if (event.target.previousSibling) {
                event.target.previousSibling.focus(); // 이전 입력 필드로 포커스 이동
            }
        }
    };
    

    const handleResend = async () => {
        try {
            await postMail(email);
            console.log('Email data posted successfully');
            navigate('/login2');
        } catch (error) {
            console.error('Error posting email data:', error);
        }
    };

    const handleSubmit = async () => {
        const enteredCode = code.join("");
        console.log(`Entered code: ${enteredCode}`);
        
        try {
            await postMailCheck(email, enteredCode);
            console.log('Key data posted successfully');
            navigate("/login3"); 
        } catch (error) {
            console.error('Error posting key data:', error);
        }
    };

    const handleBack = () => {
        navigate('/login1'); // 이전 페이지로 이동
    };

    return (
        <div className="LoginPage">
             <div className="container">

            <header className="header">
                <button className="back-button" onClick={handleBack}>
                    <IoChevronBack />  
                </button>
            </header> 
         
                <h2 className="login-heading">인증 메일이 보내졌습니다</h2>
                <p className="login-subtext">인증 번호 6자리를 입력해주세요</p>

            <div className="code-inputs">
                {code.map((digit, index) => (
                <input
                key={index}
                type="text"
                maxLength="1"
                className="code-input"
                value={digit}
                onChange={(e) => handleInputChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}  // onKeyDown 이벤트 추가
                onFocus={(e) => e.target.select()} 
                 />
                 ))}
             </div>
                    <p className="resend">
                        메일을 못받으셨나요? &nbsp;
                        <span onClick={handleResend}>다시 받기</span>
                    </p>
                <div className="botton-container">
                <button className="bottom-Button" onClick={handleSubmit}>
                    다음
                </button>
                </div>
            </div>
        </div>
    );
};

export default Login2;
