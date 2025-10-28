import React from 'react'
import { Link } from "react-router-dom";
import "./Projects.css"
import Popup from 'reactjs-popup';
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section className='projects-page'>
      <h1 className='header'>Projects</h1>
      <div className='project-grid'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <img src={project.image} alt={project.title} className='project-image'/>
            <div className='project-contnet'>
              <h2 className='project-title'>{project.title}</h2>
              <p className='project-description'>{project.description}</p>
            </div>
              <div className='project-buttons'>
              <Popup trigger = {<button className='details-btn'>Details</button>} modal nested>
              {(close) => (<div className='modal'>
              <h3 className='project-Name'>{project.title}</h3>
              <p className='full-Body'>{project.fullDescription}</p>
              <button className='close-btn' onClick={close}>Close</button>
              </div>
              )}
              </Popup>
              {project.link && (
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'> View GitHub Repo </a>
              )}
              </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">
          <span> &larr;Home</span>
        </Link>
    </section>
  )
}