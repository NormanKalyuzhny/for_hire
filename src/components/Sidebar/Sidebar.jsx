import React from 'react'
import './Sidebar.css'
import { menuItems } from '../Header/Header.jsx'

export const Sidebar = ({handleShowSidebar}) => {
    return (
        <div className="sidebar">
            <div onClick={handleShowSidebar} className="bgOverlay"></div>
                <ul className="menuList">
                {menuItems.map((item, index) => (
                    <li key={index} className="menuListItem">
                    <a href={item.href} className="menuListLink">
                        {item.label}
                    </a>
                    </li>
                ))}
                </ul>
        </div>
    )
}