import React from 'react'
import { Link } from "react-router-dom";
import "./Resume.css";

export default function Resume() {
  return (
    <div className='main-Container'>
      <Link to="/" className="back-button">
                <span> &larr;Home</span>
              </Link>
    </div>
  )
}
