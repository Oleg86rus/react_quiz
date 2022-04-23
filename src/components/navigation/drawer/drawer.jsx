import React from 'react'
import './drawer.css'

const Drawer = ({ isOpen }) => {
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
    <nav className={cls.join(' ')}>
      <ul>
        {renderLinks()}
      </ul>
    </nav>
  )
}

export default Drawer