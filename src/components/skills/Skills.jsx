import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'


function Skills() {
  return (
    <section id="Skills">

      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">

          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> Front-End</h4>
                <small className='text-light'>HTML, CSS , JAVA SCRIPT , REACT.JS </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> Back-end</h4>
                <small className='text-light'>NODE.JS,EXPRESS.JS</small>
              </div>
            </article> 
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4>DataBase Management</h4>
                <small className='text-light'>Mongo DB , PostgreSQL</small>
              </div>
            </article> 
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4>Machine Learning </h4>
                <small className='text-light'>Python(Pandas ,Numpy) , Jupyter , SciKit Learn</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> Deep Learning</h4>
                <small className='text-light'>Tensor Flow, MatplotLib </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> Analytica And Problem Solving</h4>
                <small className='text-light'>C++ , Data Structures and ALgorithms , OOPS concept,STL </small>
              </div>
            </article>


          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills