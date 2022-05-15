import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'
import Me from '../../assets/me.png'

function header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I am</h5>
        <h1>UJJWAL TYAGI</h1>
        <h5 className="text-light">Full Stack developer </h5>
        <CTA/>

      <a href='#Contact' className='scroll__down'>Scroll Down</a>  
        <img src={Me} alt="Me" className="me" />
        <Socials/>
      </div>

    </header>

  )
}

export default header