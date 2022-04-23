import React from 'react'
import './backDrop.css'

const BackDrop = ({ onClick }) => {
  return (
    <div className="BackDrop" onClick={onClick}></div>
  )
}

export default BackDrop