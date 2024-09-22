import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import '../LoginPage/Main.css';


// 학번, 학과 입력
const Login6 = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  // 단과대와 학과 정보를 정의
  const divisionsAndDepartments = {
    "인문대학": ["국어국문학과", "영어영문학과", "독어독문학과", "불어불문학과", "일어일문학과", "중어중문학과"],
    "자연과학대학": ["수학과", "물리학과", "화학과", "패션산업학과", "해양학과"],
    "사회과학대학": ["사회복지학과", "미디어커뮤니케이션학과", "문헌정보학과", "창의인재개발학과"],
    "글로벌정경대학": ["행정학과", "정치외교학과", "경제학과", "무역학부", "소비자학과"],
    "공과대학": ["기계공학과", "메카트로닉스공학과", "전기공학과", "전자공학과", "산업경영학과", "신소재공학과", "안전공학과", "에너지화학공학과"],
    "정보기술대학": ["컴퓨터공학부", "정보통신공학과", "임베디드시스템공학과"],
    "경영대학": ["경영학부", "세무회계학과"],
    "예술체육대학": ["조형예술학부", "디자인학부", "공연예술학과", "체육학부", "운동건강학부"],
    "사범대학": ["국어교육과", "영어교육과", "일어교육과", "수학교육과", "체육교육과", "유아교육과", "역사교육과", "윤리교육과"],
    "도시과학대학": ["도시행정학과", "건설환경공학과", "환경공학과", "도시공학과", "도시건축학과"],
    "생명과학기술": ["생명공학부", "생명공학부 생명공학전공", "생명공학부 나노바이오전공", "도시공학과"],
    "동북아국제통상학부": ["동북아국제통상학부", "한국통상전공"],
    "법학부": ["법학부"]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentNumber && division && department) {
      navigate("/Login7");
    } else {
      alert("모든 항목을 입력해 주세요.");
    }
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="start-page">
      <header className="header">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBack />
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div>
        </div>
      </header>

      <h2 className="login-heading">춘식이님에 대해 알려주세요</h2>
      <p className="login-subtext">학번 9자리를 입력해주세요</p>

      <form onSubmit={handleSubmit}>
        <div className="student-id">
          <input
            type="text"
            id="studentNumber"
            maxLength="9"
            placeholder="202400000"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            className="input"
          />
        </div>

        {/* 단과대 선택 */}
        <div className="select-container1">
          <label htmlFor="division">단과대와 학과를 선택해주세요</label>
          <select
            id="division"
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              setDepartment(""); // 단과대 변경 시 학과 선택 초기화
            }}
            className="select-department"
          >
            <option value="">단과대 선택하기</option>
            {Object.keys(divisionsAndDepartments).map((div, idx) => (
              <option key={idx} value={div}>{div}</option>
            ))}
          </select>
        </div>

        {/* 학과 선택 */}
        {division && (
          <div className="select-container2">
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="select-department"
            >
              <option value="">학과 선택하기</option>
              {divisionsAndDepartments[division].map((dept, idx) => (
                <option key={idx} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" className="bottom-Button">
          다음
        </button>
      </form>
    </div>
  );
};

export default Login6;