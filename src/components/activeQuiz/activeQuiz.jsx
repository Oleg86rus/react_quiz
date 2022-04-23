import React from 'react'
import './activeQuiz.css'
import AnswersList from './answerList/answersList'

const ActiveQuiz = ({
  answers,
  question,
  onAnswerClick,
  answerNumber,
  quizLength,
  answerClicked,
}) => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{answerNumber}.</strong>&nbsp;
          {question}
        </span>
        <small>{answerNumber} из {quizLength}</small>
      </p>
      <ul>
        <AnswersList
          answers={answers}
          onAnswerClick={onAnswerClick}
          answerClicked={answerClicked}
        />
      </ul>
    </div>
  )
}

export default ActiveQuiz