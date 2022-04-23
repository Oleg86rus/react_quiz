import React, { useState } from 'react'
import './layout.css'
import MenuToggle from '../../components/navigation/menuToogle/menuToggle'
import Drawer from '../../components/navigation/drawer/drawer'

const Layout = ({ children }) => {
  const state = {
    menu: false,
  }
  const [menu, setMenu] = useState(state.menu)
  const toggleMenuHandler = () => {
    setMenu(!menu)
  }
  const menuCloseHandler = () => {
    setMenu(!menu)
  }
  
  return (
    <div className="layout">
      <Drawer isOpen={menu} onClose={menuCloseHandler}/>
      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu}/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout