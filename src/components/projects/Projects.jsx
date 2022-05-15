import React from 'react'
import './projects.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'


function projects() {
  return (
    <section id="Projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img1}></img>
          </div>
          <h3>Project title</h3>
          <a href='' className='btn btn-primary'>GitHub</a>
       

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img1}></img>
          </div>
          <h3>Project title</h3>
          <a href='' className='btn btn-primary'>GitHub</a>
         

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img1}></img>
          </div>
          <h3>Project title</h3>
          <a href='' className='btn btn-primary'>GitHub</a>
         

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img1}></img>
          </div>
          <h3>Project title</h3>
          <a href='' className='btn btn-primary'>GitHub</a>
         

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img1}></img>
          </div>
          <h3>Project title</h3>
          <a href='' className='btn btn-primary'>GitHub</a>
        

        </article>
      </div>
    </section>
  )
}

export default projects