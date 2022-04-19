import React from 'react'
import './answerItem.css'

const AnswerItem = ({ answer, onAnswerClick }) => {
  return (
    <li className='AnswerItem' onClick={()=>onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  )
}

export default AnswerItem