import Projects from './components/projects/projects';
import './App.css';
import Brain from './components/projects/smart-brain-logo.png';
import Ship from './components/projects/spaceship.png';
import Machine_learning from './components/projects/machine-learning.png';
import Deep_learning from './components/projects/deep-learning.png';
import Navigation from './components/navigation/navigation';
import Home from './components/Home/Home';
import About_me from './components/About-me/About-me';
import Footer from './components/footer/footer';
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
          <Navigation changestate={this.changestate} />
          <Home />
          <Footer />
        </div>
      );
    }
    if (this.state.route === 'about-me') {
      return (
        <div>
          <Navigation changestate={this.changestate} />
          <About_me />
          <Footer />
        </div>
      );
    }
    
    if (this.state.route === 'projects') {
      return (
        <div>
          <Navigation changestate={this.changestate} />
          <div className='te background' >
           <h1 className='headings'> MY PROJECTS </h1>
          </div >
          <div className='projecticon'>
          <Projects brain={Brain} name ={'Smart-Brain-App'} link={"https://github.com/UjjwalTyagi15/smart-brain"}/>
          <Projects brain={Ship} name ={'Space Invaders'} link={"https://github.com/UjjwalTyagi15/Space_invaders_pygames"} />
          <Projects brain={Machine_learning} name ={'ML Project'} link={"https://github.com/UjjwalTyagi15/Bulldozer_price_prediction"}/>
          <Projects brain={Deep_learning} name ={'Dl Project'} link={"https://github.com/UjjwalTyagi15/smart-brain"}/>
          <Footer />
          </div> 
        </div>
      );
    }
    
    if (this.state.route === 'skills') {
      return (
        <div>
          <Navigation changestate={this.changestate} />
          <Skills />
          <Footer />
        </div>
      );
    }
    

  }
}
export default App;


