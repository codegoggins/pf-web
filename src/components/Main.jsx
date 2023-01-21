import React from 'react'
import emoji from "react-easy-emoji";
const Main = () => {
  return (
    <div name='main' 
        className='pl-20 h-screen w-full bg-gradient-to-b from-black to-gray-800 p-6 flex flex-col items-center gap-6 md:flex-row md:items-center'>
           {/* LEFT */}
                <div className='text-white mt-8 flex flex-col gap-6 mb-6 md:w-1/2'>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-3xl md:text-4xl'>
                        I'm Nilay Singh
                        </h1>
                        <span className='text-3xl animate-bounce z-20'>{emoji("👋")}</span>
                    </div>
                    <div className='leading-7 flex flex-col items-center justify-start gap-8 mt-2 md:flex-row md:text-2xl'>
                        <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with JavaScript / Reactjs / Nodejs / MongoDB and some other cool libraries and frameworks.</p>
                     </div>
                     <div className='gap-3 hidden md:flex'>
                        <button className='cursor-pointer font-semibold bg-black p-2.5 px-4 rounded-md hover:bg-white hover:text-black transition ease-linear duration-300'>Portfolio</button>
                        <button className='cursor-pointer font-semibold bg-black p-2.5 px-4 rounded-md hover:bg-white hover:text-black transition ease-linear duration-300'>Resume</button>
                     </div>
                </div>
            {/* LEFT */}

            {/* RIGHT */}
                <div className='flex items-center justify-center md:w-1/2'>
                    <img 
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt=""
                    className='h-56 w-96 rounded-3xl md:h-72 md:w-128'
                     />
                </div>
            {/* RIGHT */}
    </div>
  )
}

export default Main