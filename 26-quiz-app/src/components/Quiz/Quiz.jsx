import QUESTIONS from "../../question.js";
import { useCallback, useState } from "react";
import completedQuiz from "../../assets/react.svg";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex = userAnswers.length;

  const complete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectAnswer,
  ) {
    setAnswerState("answered");

    setUserAnswers((prev) => {
      return [...prev, selectAnswer];
    });

    setTimeout(() => {
      if (selectAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }
    }, 1000);

    setTimeout(() => {
      setAnswerState("");
    }, 2000);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (complete) {
    return (
      <>
        <div id="summary">
          <img src={completedQuiz} alt="   " />
          <h2>Quiz completed</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={10000}
            onTimeout={handleSkipAnswer}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((ans, index) => {
              const isSelected = userAnswers[userAnswers.length -1] === ans;

              let css = '';
              if(isSelected && answerState === 'answered') {
                css = 'selected';
              }

              if(isSelected && (answerState === 'correct' || answerState === 'wrong' )) {
                css = answerState;
              }

              return (
                <li key={index} className="answer">
                  <button onClick={() => handleSelectAnswer(ans)} className="css">{ans}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
