import React from 'react'
import './drawer.css'
import BackDrop from '../../UI/backDrop/backDrop'
import { NavLink } from 'react-router-dom'

const Drawer = ({ isOpen, onClose }) => {
  const links = [
    {
      to: '/',
      label: 'Список',
      exact: true
    },
    {
      to: '/auth',
      label: 'Авторизация',
      exact: false
    },
    {
      to: '/quiz-creator',
      label: 'Создать тест',
      exact: false
    }
  ]
  const clickHandler = () => {
    onClose()
  }
  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} onClick={clickHandler}>
            {link.label}
          </NavLink>
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