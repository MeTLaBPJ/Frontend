import React, { useState, useEffect } from 'react';
import Login1 from './Login1';
import Login2 from './Login2';
import Login3 from './Login3';
import Login4 from './Login4';
import Login5 from './Login5';
import Login6 from './Login6';
import Login7 from './Login7';

const SignUpProcess = () => {
    const [step, setStep] = useState(3);
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

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

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
                return <Login5 nextStep={nextStep} prevStep={prevStep} userData={(value) => setUserData(prevState => ({ ...prevState, email: value }))} />;

            case 6:
                return <Login6 nextStep={nextStep} prevStep={prevStep} userData={(value) => setUserData(prevState => ({ ...prevState, email: value }))} />;
            case 7:
                return <Login7 prevStep={prevStep} userData={(value) => setUserData(prevState => ({ ...prevState, email: value }))} />;
            default:
                return <div>회원가입 완료</div>;
        }
    };

    return <div>{renderStep()}</div>;
};

export default SignUpProcess;