import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { IoChevronBack } from 'react-icons/io5';
import '../LoginPage/SignIn.css';  

const Mbti2 = () => {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState({});

    const questions = [
      {
        id: 1,
        question: "친구 생일 선물을 챙겨주려고 한다. 어떤 선물을 줄까",
        answers: [
          "전에 친구가 이거 없다고 했으니까~ 이거 사줘야지!",
          "가성비 최고 상품권"
        ]
      },
      {
        id: 2,
        question: "친구가 요즘 고민이 많다고 휴학을 고민 중이라고 한다. 이때 당신의 반응은?",
        answers: [
          "뭐?? 휴학하고 뭐하게?",
          "많이 힘들구나... 많이 생각하고 휴학하면 괜찮겠지"
        ]
      },
      {
        id: 3,
        question: "친구가 시험을 망쳤다. 위로의 한마디를 건넨다면?",
        answers: [
          "그래도 고생했어, 다음에는 더 잘할 수 있을 거야",
          "아 그래? 아쉬운 거지~"
        ]
      },
      {
        id: 4,
        question: "학과 개강 총회가 열렸다! 참석할 것인가?",
        answers: [
          "고민해 보고 간다",
          "가도 말을 잘 못해서... 안간다"
        ]
      },
      {
        id: 5,
        question: "휴학 후 복학한 친구가 만나자고 한다! 약속을 어떻게 잡을까?",
        answers: [
          "내 시간표 이건데~ 시간 날 때 연락하자!",
          "다음 주 금요일 점심 어때?"
        ]
      },
      {
        id: 6,
        question: "과제 폭탄 시즌...! 이때 나는?",
        answers: [
          "미룬이~!! 마감 전까지만 내면 되겠지 뭐~",
          "일단 계획을 세우고 차근차근해보자...!"
        ]
      },
      {
        id: 7,
        question: "우연히 팀 프로젝트를 진행하다가 발표를 맡게 되었다! 발표 준비를 어떻게 할까?",
        answers: [
          "철학자~ 니체~ 독일~ 키워드만 준비한다",
          "니체는 1844년 독일에서 태어나... 대본부터 리허설까지 철저하게 준비한다"
        ]
      }
    ];

    const handleAnswerSelect = (questionId, answer) => {
      setSelectedAnswer({ ...selectedAnswer, [questionId]: answer });
    };

    const handleBack = () => {
      navigate(-1);  // 뒤로 가기 버튼 기능 (이전 페이지로 이동)
    };

    const handleNextClick = () => {
      console.log('선택된 답변:', selectedAnswer);
      navigate('/next-page');  // 'next-page' 경로로 이동
    };

    // '다음' 버튼 비활성화를 위한 로직
    const isNextButtonDisabled = Object.keys(selectedAnswer).length !== questions.length;

    return (
      <div className="Mbti1Page">
        <header className="header">
          <button className="back-button" onClick={handleBack}>
            <IoChevronBack />
          </button>
          <div className="progress-bar">
            <div className="progress" style={{ width: "100%" }}></div>
          </div>
        </header>

        <div className="questionnarea">
          <div>
            <h2 className="login-heading">춘식이님의 성격을 알려주세요</h2>
          </div>
          {questions.map((q) => (
            <div key={q.id} className="question-section">
              <h6>{q.question}</h6>
              <div className="answers">
                {q.answers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(q.id, answer)}
                    className={selectedAnswer?.[q.id] === answer ? 'selected' : ''}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            className="bottom-Button"
            onClick={handleNextClick}
            disabled={isNextButtonDisabled}  // 모든 질문에 답변을 선택할 때까지 버튼 비활성화
          >
            다음
          </button>
        </div>
      </div>
    );
};

export default Mbti2;
