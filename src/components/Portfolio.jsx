import React from 'react'
import Projects from './Projects'
import Skills from './Skills'

const Porfolio = () => {

  return (
    <div 
    className='px-20'>
        <p className='text-white text-[2.8rem] mb-10'>Portfolio</p>
        <Projects/>
        <Skills/>
    </div>
  )
}

export default Porfolio