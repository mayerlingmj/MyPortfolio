import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About Me</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
