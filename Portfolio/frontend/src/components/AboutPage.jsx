import React from 'react'
import './AboutPage.css'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfilePic from '../assets/ProfilePic.jpg'
import NavBar from './Navbar'
import './Navbar.css'

const AboutPage = (props) => {
  const resumeUrl =
    'https://docs.google.com/document/d/1euPMsWax5bTM-OLi-WFcEayQ8NpqYBJ5/edit?usp=sharing&ouid=102120272977333432467&rtpof=true&sd=true'

  return (
    <div className="page">
      <NavBar />
      <h1>About Me</h1>
      <div className="about-me-container">
        <img alt="Profile Pic" className="profile-pic" src={ProfilePic} />
        <p>
          Hello! I'm Mayerling Joseph, a Junior Software Engineer with a deep
          passion for technology and problem-solving. However, my journey into
          the tech world is not a typical one. I began my career as a special
          education teacher, a role that taught me patience, empathy, and the
          ability to break down complex concepts into understandable parts.
          While I loved my work, I was always intrigued by the technological
          tools I used daily. The potential of technology to transform education
          and the world at large was fascinating, and I found myself drawn to
          the process of creating such tools. With that spark of interest, I
          decided to transition to software engineering. I immersed myself in
          learning coding languages, understanding algorithms, and building
          functional applications. The process was challenging, but every
          problem I solved and every project I built increased my fascination
          and love for this field. Now, as a software engineer, I combine my
          teaching skills and technical skills to develop applications that are
          not only functional but also intuitive and user-friendly. My journey
          from special education to software engineering has been unique, but I
          believe it's this unique path that has equipped me with the tools to
          make a difference in the tech world.
        </p>
      </div>
      <div className="details-button-container">
        <a
          className="details-button-containers resume-button"
          rel="noreferrer"
          target="_blank"
          href={resumeUrl}
        >
          <FontAwesomeIcon icon={faFilePdf} />
          &nbsp; RESUME
        </a>
      </div>
    </div>
  )
}
export default AboutPage
