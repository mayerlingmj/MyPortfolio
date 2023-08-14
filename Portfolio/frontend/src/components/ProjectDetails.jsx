import React from 'react'
import './ProjectDetails.css'
import sightwordThumbnail from '../assets/sightword.png'
import calculatorAppThumbnail from '../assets/calculator.png'
import studyBuddyThumbnail from '../assets/studybuddy.png'

const ProjectDetails = () => {
  const projects = [
    {
      name: 'React Calculator',
      githubLink: 'https://github.com/mayerlingmj/u4_hw_react_calculator',
      deployLink: 'https://calculator-full.surge.sh/',
      imageSrc: calculatorAppThumbnail,
      backgroundColor: '#FFA07A'
    },
    {
      name: 'Study Buddy',
      githubLink: 'https://github.com/mayerlingmj/Study-Buddy',
      deployLink: 'https://frosty-paper-254.fly.dev/',
      imageSrc: studyBuddyThumbnail,
      backgroundColor: '#FFB6C1'
    },
    {
      name: 'Sight Word Memory Game',
      githubLink: 'https://github.com/mayerlingmj/Word-Memory',
      deployLink: 'https://sightwordmj.surge.sh/',
      imageSrc: sightwordThumbnail,
      backgroundColor: '#FFC0CB'
    }
  ]

  return (
    <div className="project-details-container">
      <h2 className="proj-name">My Projects</h2>
      {projects.map((project) => (
        <div key={project.name} className="project-container">
          <div
            className="thumbnail-circle"
            style={{ backgroundColor: project.backgroundColor }}
          >
            <a href={project.githubLink}>
              <img
                src={project.imageSrc}
                alt={`${project.name} Thumbnail`}
                className="thumbnail-image"
              />
            </a>
          </div>
          <p className="project-name">{project.name}</p>
          <div className="project-links">
            <a href={project.githubLink} className="project-button">
              GitHub
            </a>
            <a href={project.deployLink} className="project-button">
              Visit Site
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectDetails
