import React from "react";

import './projects.css'
const Projects =({brain , name, link})=>{
return (<a href={link}>

    <div className='ba pointer bw2 tc grow  br3 pa3 ma2 dib bw2 shadow-5 project '>
        <img className='ba pa2 projecticon' style={{ height: 250 , width: 250 }} src={`${brain}?size=200x200`} alt="smart-brain.png" ></img>
        <div >
           <h2 >{name}</h2>
        </div>

    </div>
</a>
);

}
export default Projects;