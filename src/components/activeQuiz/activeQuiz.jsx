import React from 'react'
import './activeQuiz.css'
import AnswersList from './answerList/answersList'

const ActiveAuiz = (answers) => {
  return (
    <div className='ActiveQuiz'>
      <p className='Question'>
        <span>
          <strong>2.</strong>&nbsp;
          Как дела?
        </span>
        <small>4 из 12</small>
      </p>
      <ul>
        <AnswersList answers={answers}/>
      </ul>
    </div>
  )
}

export default ActiveAuiz