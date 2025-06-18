import React from 'react'
import { Nav } from './components/Navbar/Navbar'
import './index.css'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


const App = () => {
  return (
    <div className='body'>
      <Nav/>
      <div className='img'></div>
      <About className='my-5'/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App