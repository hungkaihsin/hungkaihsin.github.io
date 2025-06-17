import React from 'react'
import './SideProject.css'
import '../styles/shared.css'

const SideProject = () => {
  const projects = [
    {
      title: 'Project title',
      description: 'Project description',
      link: '#'
    },
    {
      title: 'Project title',
      description: 'Project description',
      link: '#'
    },
    {
      title: 'Project title',
      description: 'Project description',
      link: '#'
    },
    {
      title: 'Project title',
      description: 'Project description',
      link: '#'
    }
  ]

  return (
    <div className="sideproject-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <button className="nav-button">About Me</button>
        <a className="nav-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <button className="nav-button active">Side Project</button>
      </div>

      <div className="sideproject-container fadeUp delay-2">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideProject
