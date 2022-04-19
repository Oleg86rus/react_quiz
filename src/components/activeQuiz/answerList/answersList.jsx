import React from 'react'
import './answersList.css'
import AnswerItem from './answerItem/answerItem'

const AnswersList = ({ answers, onAnswerClick, answerClicked }) => {
  return (
    <ul className='AnswersList'>
      {answers.map((answer, index)=>{
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={onAnswerClick}
            answerClicked={answerClicked ? answerClicked[answer.id] : null}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList