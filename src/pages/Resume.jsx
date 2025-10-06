import React from 'react'
import { Link } from "react-router-dom";
import "./Resume.css";

export default function Resume() {
  return (
    <div className='main-Container'>
      <embed src="src/images/LBrignacResume2025.pdf" type="application/pdf" width="100%" height="800px"/>
      <Link to="/" className="back-Button">
                <span> &larr;Home</span>
              </Link>
    </div>
  )
}
