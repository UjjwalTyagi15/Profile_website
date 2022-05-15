import React from 'react'
import './about.css'
import Me_about from '../../assets/me_about.jpg'


function About() {
  return (
    <section id="About">
      <h5>Get to Know </h5>
      <h2>About Me </h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me_about} alt="ME" />
          </div>
        </div>
        <div className='about_content'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sint aliquam earum sed! Itaque assumenda libero id consectetur laboriosam ea nisi totam, enim ipsa aperiam est, quibusdam voluptatum iusto tempora.
        </p>
        <a href="#Contact" className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About