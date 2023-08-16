import React from 'react'
import LinkedInIcon from '../assets/LinkedIn.png'
import GitHubIcon from '../assets/GitHub.png'
import EmailIcon from '../assets/Email.png'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">LET'S CONNECT:</p>
      <div className="footer-icon-container">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mayerling-joseph/"
        >
          <img className="footer-icon" alt="LinkedIn" src={LinkedInIcon} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/mayerlingmj"
        >
          <img className="footer-icon" alt="GitHub" src={GitHubIcon} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:josephmayerling@gmail.com"
        >
          <img className="footer-icon" alt="Email" src={EmailIcon} />
        </a>
      </div>
    </div>
  )
}

export default Footer
