import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState({
        schoolEmail:"",
        password:"",
        nickname:"",
        gender:"",
        studentId:"",
        college:"",
        department:"",
        birthday:""  
        
    });

    const updateUser = (newUser)=>{
        setUser((prevUser)=>{
            return{
                ...prevUser,
                ...newUser
            };
        });
    };

    const resetUser = () => {
        setUser({
            schoolEmail:"",
            password:"",
            nickname:"",
            gender:"",
            studentId:"",
            college:"",
            department:"",
            birthday:""  
        });
    };
    return (
        <UserContext.Provider value={{ User, updateUser, resetUser }}>
            {children}
        </UserContext.Provider>
    );
}