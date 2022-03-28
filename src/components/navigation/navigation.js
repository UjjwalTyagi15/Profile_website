import React from "react";
import './Navigation.css'
import logo from './letter-u.png'

const Navigation = ({changestate}) => {
    return (
        <div className="sticky">
            <ul className="topnav pa2 ba bw1 bg-light-green heading-font ">
                <li className="pointer grow pa2 active "  onClick={()=>changestate('home')}>HOME</li>
                <li className="pointer grow pa2 " onClick={()=>changestate('about-me')} >ABOUT ME</li>
                <li className="pointer grow pa2 " onClick={()=>changestate('projects')}>PROJECTS</li>
                <li className="pointer grow pa2 " onClick={()=>changestate('skills')}>SKILLS</li>
                <li className="pointer img grow pa2 " onClick={()=>changestate('home')}  ><img src={logo}   alt='logo'/></li>
                <a href={"#"} className="icon" >
                    <i className="fa fa-bars"></i>
                </a>
            </ul>
        </div>
    )
}


export default Navigation;