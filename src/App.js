import Projects from './components/projects/projects';
import './App.css';
import Brain from './components/projects/smart-brain-logo.png';
import Bank from './components/projects/bank.png';
import Color_gradient from './components/projects/color-gradient.png';
import Ship from './components/projects/spaceship.png';
import Machine_learning from './components/projects/machine-learning.png';
import Deep_learning from './components/projects/deep-learning.png';
// import Navigation from './components/navigation/navigation';
import Home from './components/Home/Home';
import About_me from './components/About-me/About-me';
import Navbar from './components/navigation/navbar';
import React from 'react';
import Skills from './components/Skills/Skills';






class App extends React.Component {

  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  changestate = (route) => {
    this.setState({ route: route });
  }

  render() {
    if (this.state.route === 'home') {
      return (
        <div>
          <Navbar changestate={this.changestate} />
          <Home />
          
        </div>
      );
    }
    if (this.state.route === 'about-me') {
      return (
        <div>
          <Navbar changestate={this.changestate} />
          <About_me />
         
        </div>
      );
    }
    
    if (this.state.route === 'projects') {
      return (
        <div>
          <Navbar changestate={this.changestate} />
          <div className='te background' >
           <h1 className='headings'> MY PROJECTS </h1>
          </div >
          <div className='projecticon'>
          <Projects brain={Brain} name ={'Smart-Brain-App'} link={"https://github.com/UjjwalTyagi15/smart-brain"}/>
          <Projects brain={Ship} name ={'Space Invaders'} link={"https://github.com/UjjwalTyagi15/Space_invaders_pygames"} />
          <Projects brain={Machine_learning} name ={'Bulldozer_price_prediction(ML)'} link={"https://github.com/UjjwalTyagi15/Bulldozer_price_prediction"}/>
          <Projects brain={Deep_learning} name ={'Dog_breed_identification(DL)'} link={"https://github.com/UjjwalTyagi15/Dog_breed_identification_Deep_learning.git"}/>
          <Projects brain={Bank} name ={'banking_system(oops)'} link={"https://github.com/UjjwalTyagi15/OOPS_banking_system"}/>
          <Projects brain={Color_gradient} name ={'color_gradient_website'} link={"https://github.com/UjjwalTyagi15/Color_gradient_"}/>
          
          </div> 
        </div>
      );
    }
    
    if (this.state.route === 'skills') {
      return (
        <div>
          <Navbar changestate={this.changestate} />
          <Skills />
          
        </div>
      );
    }
    

  }
}
export default App;


