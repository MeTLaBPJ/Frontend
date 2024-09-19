import React from "react";
import Tabs from "./Tabs";
import "./Mypage.css";
function Mypage(){
    const UserInfo = {
        email:"metlab.inu.ac.kr",
        mbti:"ESFP",
        height:"160",
        drinking:"술 마시는 걸 즐겨요",
        smoking:"비흡연자"
    };

    const dummyBanList = [
        {
          nickname:"귀여운 횃불이1",
          userinfo:"컴퓨터공학부 22학번"
        },
        {
          nickname:"귀여운 횃불이2",
          userinfo:"컴퓨터공학부 23학번"
        },
        {
          nickname:"귀여운 횃불이3",
          userinfo:"컴퓨터공학부 24학번"
        }
      ]
    
    const BanUserList=({banUserList})=>{
        return (
            <div className="banUserList">
            차단 목록
            <div id="banUser">
                {banUserList.map((user)=>(
                    <div id="listForm" key={user.nickname}>
                        <div id="ban_profile"></div>
                        <div id="banUserInfo">
                            <div id="ban_nickname">{user.nickname}</div>
                            <div id="ban_userinfo">{user.userinfo}</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>)
    }
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
                    <div id="profile_info">내 정보에서 프로필 내용을 수정할 수 있어요</div>
                        <div id="ment_cont">
                            <div id="ment_title">나의 한 마디</div>
                            <div id="ment_input">
                                <input id="ment"></input>
                                <button id="ment_btn">수정</button>
                            </div>
                        </div>
                        <div id="others">
                            <div id="mbti" className="option">  · MBTI
                               <div className="option_info">{UserInfo.mbti}</div>
                            </div>
                            <div id="height" className="option"> · 키
                               <div className="option_info">{UserInfo.height}cm</div>
                            </div>
                            <div id="drinking" className="option"> · 음주
                            <div className="option_info"> {UserInfo.drinking}</div>
                            </div>
                            <div id="smoking" className="option"> · 흡연
                            <div className="option_info">{UserInfo.smoking}</div>
                            </div>
                           
                        </div>
                        <div id="email">
                            <div className="option" >· 이메일 </div>
                            <div  id="email_info">{UserInfo.email}</div>
                        </div>
                        <button id="secession">탈퇴하기</button>
                    </div>
                    <div label="내 정보">
                    <div id="profile_info">키워드 사이엔 쉼표(,)로 구분해주세요</div>
                        
                        <div id="email">
                            <div className="option">· 이메일 </div>
                            <div  id="email_info">{UserInfo.email}</div>
                        </div>
                        
                        <div id="others">
                            <div className="mTitle">프로필
                                <button id="submit">저장</button>
                            </div>
                            <div id="mbti" className="option">  · MBTI
                                <input placeholder={UserInfo.mbti}></input>

                            </div>
                            <div id="height" className="option"> · 키
                                <input placeholder={UserInfo.height}></input>
                            </div>
                            <div id="drinking" className="option"> · 음주
                                <input placeholder={UserInfo.drinking}></input>
                            </div>
                            <div id="smoking" className="option"> · 흡연
                                <input placeholder={UserInfo.smoking}></input>
                            </div>
                           
                        </div>
                        
                    </div>
                    <div label="차단 관리">
                        <BanUserList banUserList={dummyBanList}/>
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