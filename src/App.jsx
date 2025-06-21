import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Nav from './components/Nav'
import AllProjects from './components/AllProjects';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Experiences />
            <Projects />
            <Skills />
            <Contact />
          </>
        } />
        <Route path="/more-projects" element={<AllProjects />} />
      </Routes>
    </>
  )
}

export default App
