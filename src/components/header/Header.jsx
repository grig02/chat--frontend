import React from 'react'
import './Header.css'

const Header = ({username, logout}) => {
  return (
    <div className="header">
      <div className="round-avatar"/>
      <div className="username">{username}</div>
      <div className="logout">
        <button onClick={logout} className="logout-button">logout</button>
      </div>
    </div>
  )
}

export default Header
