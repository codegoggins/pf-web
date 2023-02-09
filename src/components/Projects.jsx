import React from 'react'
import net from '../assets/netflix.png'

const Projects = () => {

  const ProjectsArray = [
    {
      id:1,
      title:"Netflix Clone",
      desc:"Netflix Landing Page Clone using React JS and Tailwind CSS with Authentication Feature using Firebase",
      imgLink:net,
      codeLink:"https://github.com/codegoggins/netflix-clone",
      projectLink:"https://netflix-clone-13127.firebaseapp.com/"
    }
  ]

  return (
    <div className='py-4'>
        <p
        className='text-white text-4xl border-b-4 border-gray-500 inline'
        >My Work</p>
        {/* PROJECT CARDS */}
        <div
        className='mt-8 flex flex-col justify-center items-center md:flex md:items-start'
        >
          
            {/* SINGLE CARD */}
        {
          ProjectsArray.map(({id,title,desc,imgLink,codeLink,projectLink})=>(
            <div key={id}>
                <div className='w-[340px] h-auto relative group md:w-[500px]'>
                     {/* OVERLAY */}
                    <div 
                    className='bg-black/80 text-sm md:text-lg absolute flex top-0 bottom-0 h-full w-full rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    {/* PROJECT DETAILS */}
                    <div 
                    className='text-white text-sm md:text-lg flex flex-col p-4 gap-3 md:gap-2 items-center justify-center'>
                    {/* TITLE */}
                    <p>{title}</p>
                    {/* DETAIL */}
                    <p>{desc}</p>
                    {/* BUTTONS */}
                    <div 
                    className='flex gap-3 text-sm md:text-lg'>
                      <button
                      className='cursor-pointer font-semibold p-1.5 px-4 rounded-md bg-white text-black transition ease-linear duration-300'
                      >
                        <a href={codeLink} target='_blank' rel="noreferrer">Code</a>
                      </button>
                      <button
                      className='cursor-pointer font-semibold p-1.5 px-2 rounded-md bg-white text-black transition ease-linear duration-300'>
                        <a href={projectLink} target='_blank' rel="noreferrer">See Project</a>
                      </button>
                    </div>
                    </div>
                    </div>
                    {/* Image */}
                    <div className='rounded-lg overflow-hidden'>
                    <img src={imgLink} alt="" className='h-full w-full object-cover'/>
                    </div>
                </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Projects