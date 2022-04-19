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
  const answerClicked = null
  
  let activeQuestion = 0
  const [question, setQuestion] = useState(activeQuestion)
  const [answer, setAnswer] = useState(answerClicked)
  const isQuizFinished = () => {
      return question + 1 === quiz.length
  }
  const onAnswerClickHendler = (answerId)=> {
    if (answerId === quiz[question].rightAnswerId) {
      setAnswer({[answerId]: 'success'})
      console.log('Correct answer')
      const timeout = setTimeout(()=>{
        if (isQuizFinished()) {
          console.log('Finished')
        } else {
          setQuestion(() => question + 1)
          setAnswer(null)
        }
        clearTimeout(timeout)
      }, 500)
    } else {
      setAnswer({[answerId]: 'error'})
      console.log('Wrong answer')
    }
  }
  
  return (
    <div className='quiz'>
      <div className='quizWrapper'>
        <h1>Пройдите опрос</h1>
        <ActiveQuiz
          answers={quiz[question].answers}
          question={quiz[question].question}
          onAnswerClick={onAnswerClickHendler}
          quizLength={quiz.length}
          answerNumber={quiz[question].id}
          answerClicked={answer}
        />
      </div>
    </div>
  )
}
export default Quiz