import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { IoChevronBack } from 'react-icons/io5';
import '../LoginPage/SignIn.css';  

const Mbti1 = () => {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState({});

    const questions = [
      {
        id: 1,
        question: "친구가 쓸 교양을 알려줬다! 근데 토론을 한단다고...?",
        answers: [
          "토론은 좀 부담스러운데...",
          "헐 완전 재밌겠는데! 당장 잡아야지!"
        ]
      },
      {
        id: 2,
        question: "대망의 학기 첫 수업! 강의실에 갔는데 나 빼고 다들 친해진 것 같아 보인다... 나의 선택은?",
        answers: [
          "나도 가서 말 걸어볼까...?",
          "가만히 있는다",
          "누가 나한테 말 걸어줬으면 좋겠다ㅠㅠ"
        ]
      },
      {
        id: 3,
        question: "학기가 시작하고 수업을 들으니 이해가 잘 될까? 어떤 생각을?",
        answers: [
          "아 과탑하겠는데? 장학금 타면 뭐 하지?",
          "오늘 집중력 개박살인데?"
        ]
      },
      {
        id: 4,
        question: "당신은 배가 고파서 학식을 먹으려고 하는데, 나의 학식 먹는 방법은?",
        answers: [
          "내가 먹고 싶은 메뉴는 미리 예약하고 가야지",
          "일단 학식당 가서 그때 당기는 거 먹자"
        ]
      },
      {
        id: 5,
        question: "팀 프로젝트를 하게 되었는데 당신이 팀장을 맡게 되었다면?",
        answers: [
          "노션에 세운 세부 계획을 보여주며 이거대로 진행하자고 한다",
          "일단 큰 틀만 잡아보고 세부적인 것은 나중에 잡자"
        ]
      },
      {
        id: 6,
        question: "팀 내에서 의사소통을 할 때, 구체적인 사실과 데이터를 중시하나요 아니면 가능성이나 잠재적인 발전 방향을 더 중시하나요?",
        answers: [
          "구체적인 사실과 데이터 기반으로 논의한다",
          "큰 그림을 보고 어떻게 더 발전할 수 있을지 논의한다"
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
      navigate('/Mbti2');  // 'next-page' 경로로 이동
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

export default Mbti1;
