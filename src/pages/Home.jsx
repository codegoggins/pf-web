import React from 'react'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Links from '../components/Links'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import WorkExperience from '../components/WorkExperience'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800'>
        <Navbar/>
        <Main/>
        <Links/>
        <Portfolio/>
        <Education/>
        <WorkExperience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home