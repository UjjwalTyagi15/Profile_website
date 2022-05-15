import React from 'react'
import {BsLinkedin , BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'


const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ujjwal-tyagi-308336232/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/UjjwalTyagi15' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://leetcode.com/ujjwal_tyagii/' target="_blank" rel="noreferrer"><SiLeetcode/></a>
    </div>
  )
}

export default Socials