import React from 'react'
import './footer.css'
import {BsLinkedin , BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import logoU from '../../assets/letteru.png'


function Footer() {
  return (
    <footer id="Footer">
      <a href="#" className='footer_logo'><img src={logoU} alt="UJJ" /></a>
      <ul className='permalinks'>
        <li><a href='#' >Home</a></li>
        <li><a href='#About' >About</a></li>
        <li><a href='#Skills' >Skills</a></li>
        <li><a href='#Projects' >Projects</a></li>
        <li><a href='#Contact' >Contact</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='https://www.linkedin.com/in/ujjwal-tyagi-308336232/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/UjjwalTyagi15' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://leetcode.com/ujjwal_tyagii/' target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer