import React from 'react'
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <div className='main-Container'>
      <Link to="/" className="back-button">
                <span> &larr;Home</span>
              </Link>
    </div>
  )
}