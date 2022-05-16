import React from 'react'
import './projects.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'



function projects() {
  return (
    <section id="Projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img1} alt="SMART BRAIN"></img>
          </div>
          <h3>Fullstack Face recorgnition Web App using React</h3>
          <a href='https://github.com/UjjwalTyagi15/smart-brain' target='_blank'   rel="noreferrer" className='btn btn-primary'>GitHub</a>
       

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img2} alt="SMART BRAIN"></img>
          </div>
          <h3>Bulldozers Price Predictions using ML</h3>
          <a href='https://github.com/UjjwalTyagi15/Bulldozer_price_prediction' target='_blank' rel="noreferrer" className='btn btn-primary'>GitHub</a>
         

        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={img3} alt="SMART BRAIN"></img>
          </div>
          <h3>Dog Breed identification using Deep Learning</h3>
          <a href='https://github.com/UjjwalTyagi15/Dog_breed_identification_Deep_learning' target='_blank' rel='noreferrer' className='btn btn-primary'>GitHub</a>
         

      
        

        </article>
      </div>
    </section>
  )
}

export default projects