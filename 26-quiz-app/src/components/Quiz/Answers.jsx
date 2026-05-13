import { useRef } from "react";
import QUESTION from "../../question.js";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffleAnswers = useRef();

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
  }

  return (
    <>
      <ul id="answers">
        {shuffleAnswers.current.map((answer) => {
          const isSelect = answer === selectedAnswer;

          let cssClass = "";

          if (isSelect && answerState === "answered") {
            cssClass = "selected";
          }

          if (isSelect && answerState === "correct") {
            cssClass = answerState;
          }

          if (isSelect && answerState === "wrong") {
            cssClass = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onselect(answer)}
                className="cssClass"
              >{answer}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
