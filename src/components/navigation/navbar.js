import React, { useState } from "react";
import "./navbar.css";
import {FaGithubSquare} from "react-icons/fa";
import { BsLinkedin} from "react-icons/bs";
import {SiLeetcode} from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

import letteru from "./letteru.png";

const Navbar = ({changestate}) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img className ="w-10 pointer grow " onClick={()=>changestate('home')} src={letteru} alt="LOGO"/>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className="pointer grow " onClick={()=>{changestate('home'); setShowMediaIcons(!showMediaIcons);}}>
              Home
            </li>
            <li className="pointer grow " onClick={()=>{changestate('about-me');setShowMediaIcons(!showMediaIcons);}}>
              About
            </li>
            <li className="pointer grow " onClick={()=>{changestate('projects');setShowMediaIcons(!showMediaIcons);}}>
              Projects
            </li>
            <li className="pointer grow " onClick={()=>{changestate('skills');setShowMediaIcons(!showMediaIcons);}}>
             Skills
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://github.com/UjjwalTyagi15"
                target='_blank' rel="noreferrer">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ujjwal-tyagi-308336232/"
                target='_blank' rel="noreferrer" >
                <BsLinkedin className="linkdin" />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/ujjwal_tyagii/"
                target='_blank' rel="noreferrer" >
                <SiLeetcode className="leetcode" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;