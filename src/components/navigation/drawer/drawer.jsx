import React from 'react'
import './drawer.css'
import BackDrop from '../../UI/backDrop/backDrop'

const Drawer = ({ isOpen, onClose }) => {
  const links = [1, 2, 3]
  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
        </li>
      )
    })
  }
  const cls = [
    'Drawer',
  ]
  if (!isOpen) {
    cls.push('close')
  }
  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          {renderLinks()}
        </ul>
      </nav>
      {isOpen
        ? <BackDrop onClick={onClose}/>
        : null}
    </>
  )
}

export default Drawer