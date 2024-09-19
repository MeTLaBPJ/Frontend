import React, { createContext, useState } from 'react';

export const MbtiContext = createContext();

export const MbtiProvider = ({ children }) => {
    const [mbti, setMbti] = useState({
        e:0,
        s:0,
        f:0,
        p:0
    });

    const updateMbti = (newData)=>{
        setMbti()
    }

    const resetMbti = () => {
        setMbti({
            e:0,
            s:0,
            f:0,
            p:0
        });
    };
    return (
        <MbtiContext.Provider value={{ mbti, updateMbti, resetMbti }}>
            {children}
        </MbtiContext.Provider>
    );
}