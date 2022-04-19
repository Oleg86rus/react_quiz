import React from 'react'
import './answersList.css'
import AnswerItem from './answerItem/answerItem'

const AnswersList = ({ answers, onAnswerClick }) => {
  return (
    <ul className='AnswersList'>
      {answers.map((answer, index)=>{
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={onAnswerClick}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList