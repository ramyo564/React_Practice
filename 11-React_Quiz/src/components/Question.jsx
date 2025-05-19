import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions.js";

export default function Question({ questionIndex, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <p>{QUESTIONS[questionIndex].text}</p>;
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
