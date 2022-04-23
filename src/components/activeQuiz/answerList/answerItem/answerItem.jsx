import React from 'react'
import './answerItem.css'

const AnswerItem = ({ answer, onAnswerClick, answerClicked }) => {
  const cls = ['AnswerItem']
  if (answerClicked) {
    cls.push((answerClicked))
  }
  return (
    <li className={cls.join(' ')} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  )
}

export default AnswerItem