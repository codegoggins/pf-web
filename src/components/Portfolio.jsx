import React from 'react'
import net from '../assets/netflix.png'

const Porfolio = () => {
  return (
    <div 
    className='px-20 py-4'>
        <p
        className='text-white text-4xl'
        >Projects</p>
        {/* PROJECT CARDS */}
        <div
        className='mt-8 flex flex-col justify-center items-center md:flex md:items-start'
        >
          {/* SINGLE CARD */}
            <div 
            className='w-[500px] h-auto relative group'>
              {/* OVERLAY */}
               <div 
               className='bg-black/80 text-lg absolute flex top-0 bottom-0 h-full w-full rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300'>
               {/* PROJECT DETAILS */}
               <div 
               className='text-white text-lg flex flex-col p-4 gap-2 items-center justify-center'>
               {/* TITLE */}
               <p>Netflix Clone</p>
               {/* DETAIL */}
               <p>Netflix Landing Page Clone using React JS and Tailwind CSS with Authentication Feature using Firebase</p>
               {/* BUTTONS */}
               <div 
               className='flex gap-3 text-lg'>
                  <button
                  className='cursor-pointer font-semibold p-1.5 px-4 rounded-md bg-white text-black transition ease-linear duration-300'
                  >
                    <a href="">Code</a>
                  </button>
                  <button
                  className='cursor-pointer font-semibold p-1.5 px-2 rounded-md bg-white text-black transition ease-linear duration-300'>
                    <a href="#">See Project</a>
                  </button>
               </div>
               </div>
               </div>
               {/* Image */}
               <div className='rounded-lg overflow-hidden'>
               <img src={net} alt="" className='h-full w-full object-cover'/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Porfolio