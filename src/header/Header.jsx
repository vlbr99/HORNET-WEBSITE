import React from 'react'
import logo from '/logo.png'
import './header.scss'
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>HORNET</h1>
            </div>

        </header>
    )
}

export default Header