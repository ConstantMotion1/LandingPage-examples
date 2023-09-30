import React from 'react'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="src\assets\images\pic2.jpg" alt="Logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">About</a></li>
        <li className="navbar-item"><a href="#">Church Life</a></li>
        <li className="navbar-item"><a href="#">Events</a></li>
        <li className="navbar-item"><a href="#">Sermons</a></li>
        <li className="navbar-item"><a href="#">Donate</a></li>
        <li className="navbar-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation