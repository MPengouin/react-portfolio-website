import React from 'react'
import { Link } from "react-router-dom";
import "./Projects.css"

export default function Projects() {
  return (
    <div className='main-Container'>
      <h1 className='header'>Projects</h1>
      <div className='project-Container'>
       <div className='project-1'>
        <img className='project-Img' src="src/images/theboss.jpg" alt="theBoss" />
        <h1 className='project-Name'>The B.O.S.S</h1>
        <p><button className='button'>More Info</button></p>
       </div>
      </div>
      <Link to="/" className="back-button">
          <span> &larr;Home</span>
        </Link>
    </div>
  )
}
