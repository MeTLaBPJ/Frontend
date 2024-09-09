import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div onClick={() => navigate('/chatStartPage')}>메인</div>
        </div>
    )
}

export default Main;