import React from 'react'
import { Link } from "react-router-dom";
import "./Skills.css";

export default function Skills() {
  return (
    <div className='main-Container'>
      <Link to="/" className="back-button">
                <span> &larr;Home</span>
              </Link>
    </div>
  )
}
