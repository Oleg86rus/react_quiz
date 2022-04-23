import React from 'react'
import './finishedQuiz.css'

const FinishedQuiz = ({ results, quizes, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
      if (results[key] === 'success') total += 1
      return total
    },
    0)
  return (
    <div className="FinishedQuiz">
      <ul>
        {quizes.map((quizItem, index) => {
          const cls = [
            'fa',
            results[quizItem.id] === 'error'
              ? 'fa-times'
              : 'fa-check',
            results[quizItem.id],
          ]
          
          return (
            <li
              key={index}
            >
              <strong>
                {index + 1}
              </strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
      </ul>
      
      <p>Правильно {successCount} из {quizes.length}</p>
      <div>
        <button onClick={() => onRetry()}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz