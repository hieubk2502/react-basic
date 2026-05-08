import QUESTIONS from "../../question.js";
import { useState } from "react";
import completedQuiz from "../../assets/react.svg";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const complete = activeQuestionIndex.length === QUESTIONS.length;

  function handleSelectAnswer(selectAnswer) {
    setUserAnswers((prev) => {
      return [...prev, selectAnswer];
    });
  }

  if (complete) {
    return (
      <>
        <div className="summary">
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
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((ans, index) => {
              return (
                <li key={index} className="answer">
                  <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
