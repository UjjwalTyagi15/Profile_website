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
                <h4> HTML</h4>
                <small className='text-light'>HTML , CSS JavaScript</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> HTML</h4>
                <small className='text-light'>HTML , CSS JavaScript</small>
              </div>
            </article> 
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> HTML</h4>
                <small className='text-light'>HTML , CSS JavaScript</small>
              </div>
            </article> 
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> HTML</h4>
                <small className='text-light'>HTML , CSS JavaScript</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> HTML</h4>
                <small className='text-light'>HTML , CSS JavaScript</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='detail_icon' />
              <div>
                <h4> HTML</h4>
                <small className='text-light'>HTML , CSS JavaScript</small>
              </div>
            </article>


          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills