import React from 'react'
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className='about-container'>
      <title>About</title>
      <h1 className='header'>Who am I?</h1>
      <h2 className='sub-header'>Logan Brignac, Sophmore at Louisiana Tech University Studying Computer Science</h2>
      <p className='paragraph'>Hi my name is Logan Brignac as mentioned before I study computer science. In terms of my journey of learning
      about computer science has brought me to Louisiana Tech University as there were little to no opportunities to learn about this field
      at my high school. After one year of Louisiana Tech's computer science program I have found that I greatly enjoy developing and experiencing
      different fields of development. The one I've enjoyed the most so far is where my strongest skillset lies in OOP or object oriented programming.
      This has been my favorite part of development as everything has a clear structure on how it's supposed to work together, along with it being accounted
      for. Some other interests have been in developing games using this logic in my free time which I am currently in the works of making my first one! My
      goals are to use this degree and experience to continue to develop tools that help people, make things easier, and make games people enjoy. Some of my
      personal hobbies include playing video games, tennis, building physical and digital projects. My favorite games have to be, League of legends, Minecraft,
      Titanfall 2, Counter Strike 2, and Omori. My favorite project I've made in a group in which both I was the leader was the biomechanical prosthetic
      arm that combines the physical and digital realms. This project taught me alot about teamwork and cooperation as we had to communicate and coordinate
      effectively in order to get this complex project done by the due date which was around 6 weeks.
      </p>
      <img className='group-pic' src="../images/groupPhoto.jpeg" alt="Group photo" />
      <h2 className='group-pic-caption'>This is a picture of me and my group after winning 1st place at Louisiana Tech's Freshman Design Expo! 
        The people in this photo from left to right are Ryan Bourges, Gage Waller, Logan Brignac (Me), Whitney Jones, Joshua Coriell (Professor). </h2>
      <Link to="/" className="back-button">
          <span> &larr;Home</span>
        </Link>
    </div>
  )
}
