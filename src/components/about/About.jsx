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
          I am currently persuing my B.tech(ECE) at <a href='https://www.jmi.ac.in/' target='_blank' rel="noreferrer" >
          Jamia Millia Islamia ,New Delhi
          </a> . I am Energetic and excited to learn new things and expanding my knowledge and understanding to the new and upcoming technology. I am currently profiled as Full Stack Web developer and have experience with Machine learning and Deep learning as well . I also like to keep practice and brush up my problem solving and analytical Skills. 
        </p>
        <a href="#Contact" className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About