import QUESTIONS from "../../question.js";
import { useCallback, useRef, useState } from "react";
import completedQuiz from "../../assets/react.svg";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Quiz() {
  const shuffleQuestion = useRef();
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex = userAnswers.length;

  const complete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectAnswer) {
      setAnswerState("answered");

      setUserAnswers((prev) => {
        return [...prev, selectAnswer];
      });

      const correctAnswer = QUESTIONS[activeQuestionIndex].answers[0];

      setTimeout(() => {
        if (selectAnswer === correctAnswer) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
      }, 1000);

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex],
  );

  if(!shuffleQuestion.current) {
    shuffleQuestion.current = QUESTIONS[activeQuestionIndex].answers;
  }

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

          <Answers 
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1 ]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
          />
        </div>
      </div>
    </>
  );
}
