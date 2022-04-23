import React, { useState } from 'react'
import './quiz.css'
import ActiveQuiz from '../../components/activeQuiz/activeQuiz'
import FinishedQuiz from '../../components/finishedQuiz/finishesdQuiz'

const Quiz = () => {
  const api = {
    results: {},
    activeQuestion: 0,
    isFinished: false,
    answerClicked: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зеленый', id: 4 },
        ],
      },
      {
        question: 'В каком году основали Петербург?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1700', id: 1 },
          { text: '1702', id: 2 },
          { text: '1703', id: 3 },
          { text: '1705', id: 4 },
        ],
      },
    ],
  }
  const [finished, setFinished] = useState(api.isFinished)
  const [question, setQuestion] = useState(api.activeQuestion)
  const [answer, setAnswer] = useState(api.answerClicked)
  const [result, setResult] = useState(api.results)
  const [quiz] = useState(api.quiz)
  const isQuizFinished = () => {
    return question + 1 === quiz.length
  }
  const retryHendler = () => {
    setFinished(false)
    setAnswer(null)
    setFinished(false)
    setResult({})
    setQuestion(0)
    
  }
  const onAnswerClickHendler = (answerId) => {
    if (answerId === quiz[question].rightAnswerId) {
      if (!result[quiz[question].id]) {
        result[quiz[question].id] = 'success'
      }
      setAnswer({ [answerId]: 'success' })
      setResult(result)
      const timeout = setTimeout(() => {
          if (isQuizFinished()) {
            setFinished(true)
          } else {
            setQuestion(() => question + 1)
            setAnswer(null)
          }
          clearTimeout(timeout)
        },
        500)
    } else {
      result[quiz[question].id] = 'error'
      setAnswer({ [answerId]: 'error' })
      setResult(result)
    }
  }
  
  return (
    <div className="quiz">
      <div className="quizWrapper">
        <h1>Пройдите опрос</h1>
        {finished
          ? <FinishedQuiz
            results={result}
            quizes={quiz}
            onRetry={retryHendler}
          />
          : <ActiveQuiz
            answers={quiz[question].answers}
            question={quiz[question].question}
            onAnswerClick={onAnswerClickHendler}
            quizLength={quiz.length}
            answerNumber={quiz[question].id}
            answerClicked={answer}
          />}
      
      </div>
    </div>
  )
}
export default Quiz