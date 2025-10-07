import React from 'react'
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <div className='main-Container'>
      <h1 className='header'>Contact Me!</h1>
      <a className='email' href='ma&#105;&#108;&#116;o&#58;logan&#56;&#53;78&#64;&#103;mai&#37;6C%2&#69;&#99;&#37;&#54;&#70;&#109;'>l&#111;g&#97;n8578&#64;gma&#105;&#108;&#46;com</a>
      <br />
      <a className='linkedIn' href="https://www.linkedin.com/in/logan-brignac-671755347?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO22fzR8LTV%2BinPHty0HKzA%3D%3D">LinkedIn</a>
      <br />
      <img className='headShot' src="src/images/temp3.png" alt="headshot" />
      <Link to="/" className="back-button">
                <span> &larr;Home</span>
              </Link>
    </div>
  )
}