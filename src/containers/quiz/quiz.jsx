import React, { useState } from 'react'
import './quiz.css'
import ActiveQuiz from '../../components/activeQuiz/activeQuiz'

const Quiz = () => {

  const quiz = [
    {
      question: 'Какого цвета небо?',
      rightAnswerId: 2,
      id: 1,
      answers: [
        {text: 'Черный', id: 1},
        {text: 'Синий', id: 2,},
        {text: 'Красный', id: 3},
        {text: 'Зеленый', id: 4}
      ]
    },
    {
      question: 'В каком году основали Петербург?',
      rightAnswerId: 3,
      id: 2,
      answers: [
        {text: '1700', id: 1},
        {text: '1702', id: 2,},
        {text: '1703', id: 3},
        {text: '1705', id: 4}
      ]
    }
  ]
  const [question, setQuestion] = useState(quiz)
  let activeQuestion = 0
  const onAnswerClickHendler = (answerId)=> {
    console.log('Answer ID: ', answerId)
    activeQuestion += 1
  }
  
  return (
    <div className='quiz'>
      <div className='quizWrapper'>
        <h1>Пройдите опрос</h1>
        <ActiveQuiz
          answers={quiz[activeQuestion].answers}
          question={quiz[activeQuestion].question}
          onAnswerClick={onAnswerClickHendler}
          quizLength={quiz.length}
          answerNumber={activeQuestion + 1}
        />
      </div>
    </div>
  )
}
export default Quiz