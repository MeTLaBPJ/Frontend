import React, { useState } from 'react';
import Login1 from './Login1';
import Login2 from './Login2';
import Login3 from './Login3';
import Login4 from './Login4';
import Login5 from './Login5';
import Login6 from './Login6';
import Login7 from './Login7';

const SignUpProcess = () => {
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

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const updateUserData = (newData) => {
        setUserData({ ...userData, ...newData });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Login1 nextStep={nextStep} updateUserData={updateUserData} userData={userData} />;
            case 2:
                return <Login2 nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} userData={userData} />;
            case 3:
                return <Login3 nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} userData={userData} />;
            case 4:
                return <Login4 nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} userData={userData} />;
            case 5:
                return <Login5 nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} userData={userData} />;
            case 6:
                return <Login6 nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} userData={userData} />;
            case 7:
                return <Login7 prevStep={prevStep} updateUserData={updateUserData} userData={userData} />;
            default:
                return <div>회원가입 완료</div>;
        }
    };

    return <div>{renderStep()}</div>;
};

export default SignUpProcess;