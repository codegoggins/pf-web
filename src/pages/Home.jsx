import React from 'react'
import Education from '../components/Education'
import Links from '../components/Links'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800'>
        <Navbar/>
        <Main/>
        <Links/>
        <Portfolio/>
        <Education/>
    </div>
  )
}

export default Home