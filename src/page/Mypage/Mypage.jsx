import React from "react";
import Tabs from "./Tabs";
import "./Mypage.css";
function Mypage(){
    return(
        <div className="mypage">
            <div id="title">
                마이페이지
            </div>
            <div id="profile">
                <div id="profile_img"></div>
                <div id="nickname">귀여운 횃불이</div>
                <div id="etc">컴퓨터공학부 22학번</div>
            </div>
            <div id="divider"></div>
            <div id="tabCont">
                <Tabs>
                    <div label="프로필">

                    </div>
                    <div label="내 정보">

                    </div>
                    <div label="차단 관리">

                    </div>
                </Tabs>
            </div>
            <div id="navi">
                <div id="play"></div>
                <div id="talk"></div>
                <div id="my"></div>
            </div>
        </div>
    )
}

export default Mypage;