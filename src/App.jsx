import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'





const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>      


    </div>
  )
}

export default App