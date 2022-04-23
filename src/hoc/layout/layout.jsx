import React, { useState } from 'react'
import './layout.css'
import MenuToggle from '../../components/navigation/menuToogle/menuToggle'

const Layout = ({children}) => {
	const state = {
		menu: false
	}
	const [menu, setMenu] = useState(state.menu)
	const toggleMenuHandler = () => {
		setMenu(!menu)
	}
		return (
			<div className='layout'>
				<MenuToggle onToggle={toggleMenuHandler} isOpen={menu}/>
				<main>
					{children}
				</main>
			</div>
		);
}

export default Layout;