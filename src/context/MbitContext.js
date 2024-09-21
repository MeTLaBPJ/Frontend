import React, { createContext, useState } from 'react';

export const MbtiContext = createContext();

export const MbtiProvider = ({ children }) => {
    const [Mbti, setMbti] = useState({
        selectList:{
            "1":false,
            "2":false,
            "3":false,
            "4":false,
            "5":false,
            "6":false,
            "7":false,
            "8":false,
            "9":false,
            "10":false,
            "11":false,
            "12":false
        }
            
        
    });

    const updateMbti = (newMbti)=>{
        setMbti((prevMbti)=>{
            return{
                ...prevMbti,
                ...newMbti
            };
        });
    };

    const resetMbti = () => {
        setMbti({
            selectList:{
                "1":false,
                "2":false,
                "3":false,
                "4":false,
                "5":false,
                "6":false,
                "7":false,
                "8":false,
                "9":false,
                "10":false,
                "11":false,
                "12":false
            }
        });
    };
    return (
        <MbtiContext.Provider value={{ Mbti, updateMbti, resetMbti }}>
            {children}
        </MbtiContext.Provider>
    );
}