import React from 'react'
import { NavLink } from 'react-router-dom'
import './quizList.css'

const QuizList = () => {
  const renderQuizes = () => {
    return [1, 2, 3].map((quiz, index)=> {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz} >Тест {quiz}</NavLink>
        </li>
      )
    })
  }
  return (
    <div className='QuizList'>
      <div>
        <h1>Список тестов</h1>
  
        <ul>
          {renderQuizes()}
        </ul>
      </div>
    </div>
  )
}
export default QuizList