import React from 'react'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import WorkExperience from '../components/WorkExperience'
import Footer from '../components/Footer'
import About from '../components/About'

const Home = () => {
  return (
    <div id='Home'>
        <Navbar/>
        <Main/>
        <About/>
        <Portfolio/>
        <Education/>
        <WorkExperience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home