import React from 'react'
import "./About.css"
import images from '../../assets/images'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id="about">
    <h5>
      Get To Know
    </h5>
    <h2>About Me</h2>

    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
      <img src={images.Me1} alt="About" />
      </div>
    </div>

       <div className="about__content">
         <div className="about__cards">

     <article className="about__card">
      <FaAward className="about__icon" />
      <h5>Experience</h5>
      <small>3 years</small>
     </article>

    <article className="about__card">
      <FiUsers className="about__icon" />
      <h5>Clients</h5>
      <small>10+</small>
    </article>

    <article className="about__card">
      <VscFolderLibrary className="about__icon" />
      <h5>Projects</h5>
      <small>20+ completed</small>
    </article>
  </div>
  

    <p>
    I spent a large portion of my youth pursuing a career as a hip hop musician some years ago my passion switched to computer science and technology now I don't write rhymes, I write code. I have many interest and talents and have spent countless hours in most modern media editing software. I have an obsessive desire to complete projects or solve problems that can extend far beyond work hours. I’m having fun with front end development at the moment but I see myself moving towards lower level machine coding in the future. I also have a unique understanding and approach to social media/content creation viral marketing and branding from years of various and multiple unique marketing campaigns as a musician that can be shared in other aspects of business. Contact me lets discuss what tomorrow can be.
      </p>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      
    </div>
    </div>
    
    </section>
    
  )
}

export default About

