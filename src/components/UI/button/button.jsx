import React from 'react'
import './button.css'

const Button = ({ type, onClick, children }) => {
  const cls = [
    'Button',
    type,
  ]
  return (
    <button
      onClick={() => onClick()}
      className={cls.join(' ')}
      // disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button