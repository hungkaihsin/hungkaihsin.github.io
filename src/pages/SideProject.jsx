import React, { useEffect, useRef } from 'react'
import './SideProject.css'
import '../styles/shared.css'
import { Link } from 'react-router-dom'

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

  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="sideproject-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <Link className="nav-button" to="/about">About Me</Link>
        <a className="nav-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <button className="nav-button active">Side Project</button>
      </div>

      <div className="sideproject-container fadeUp delay-2">
        {projects.map((project, index) => (
          <div
                className="project-card"
                key={index}
                ref={el => (cardRefs.current[index] = el)}
                style={{ '--delay': `${index * 0.2}s` }}
                >

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
