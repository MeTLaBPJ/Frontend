import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login1 from './Login1';
import Login2 from './Login2';
import Login3 from './Login3';
import Login4 from './Login4';
import Login5 from './Login5';
import Login6 from './Login6';
import Login7 from './Login7';
import axios from 'axios';




const SignUpProcess = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        nickname: '',
        gender: '',
        studentNumber: '',
        department: '',
        birthdate: '',
    });


    useEffect(() => {
        console.log(userData)
    }, [userData])


    // 로컬 스토리지에 유저 닉네임 저장
    // 

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    //합쳐서 보내기
    const finalHandleSubmit = async () => {
        console.log(userData)
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, userData)
            //성공했을 때 닉네임 보내줌
            if (response.ok) {
                localStorage.setItem('userNickname', response.data.nickname);
                navigate('/')
            } else {
                console.log("회원가입 실패")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Login1 nextStep={nextStep} userData={(value) => setUserData(prevState => ({ ...prevState, email: value }))} />;
            case 2:
                return <Login2 nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <Login3 nextStep={nextStep} prevStep={prevStep} userData={(value) => setUserData(prevState => ({ ...prevState, password: value }))} />;
            case 4:
                return <Login4 nextStep={nextStep} prevStep={prevStep} userData={(value) => setUserData(prevState => ({ ...prevState, nickname: value }))} />;
            case 5:
                return <Login5 nextStep={nextStep} prevStep={prevStep} userData={(value) => setUserData(prevState => ({ ...prevState, gender: value }))} />;

            case 6:
                return <Login6 nextStep={nextStep} userData={(value) => setUserData(prevState => ({ ...prevState, ...value }))} />;
            case 7:
                return <Login7 prevStep={prevStep} finalHandleSubmit={finalHandleSubmit} userData={(value) => setUserData(prevState => ({ ...prevState, birthdate: value }))} />;
            default:
                return <div>회원가입 완료</div>;
        }
    };

    return <div>{renderStep()}</div>;
};

export default SignUpProcess;