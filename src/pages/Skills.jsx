import React from 'react'
import { Link } from "react-router-dom";
import "./Skills.css";

export default function Skills() {
  return (
    <div className='main'>
     <div className='secondary-container'>
      <div className='languages-container'>Languages
        <div className='languages'>Python</div>
        <div className='languages'>Java</div>
        <div className='languages'>HTML</div>
        <div className='languages'>CSS</div>
      </div>
      <br />
      <div className='ides-container'>IDEs
        <div className='ides'>Visual Studio Code</div>
        <div className='ides'>IntelliJ</div>
      </div>
      <br />
      <div className='applications-container'>Applications
        <div className='applications'>GitHub</div>
      </div>
      <br />
      <div className='frameworks-container'>Frameworks
        <div className='frameworks'>React</div>
      </div>
     </div>
     <Link to="/" className="back-button">
                <span> &larr;Home</span>
              </Link>
    </div>
  )
}
