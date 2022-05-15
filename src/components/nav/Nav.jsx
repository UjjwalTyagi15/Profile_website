import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {AiFillContacts} from 'react-icons/ai'



function Nav() {
  return (
    <nav>
      <a href='#'><AiFillHome/></a>
      <a href='#About'><AiOutlineUser/></a>
      <a href='#Projects'><AiOutlineProject/></a>
      <a href='#Skills'><GiSkills/></a>
      <a href='#Contact'><AiFillContacts/></a>
    </nav>
  )
}

export default Nav