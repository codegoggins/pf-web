import React from 'react'
import emoji from "react-easy-emoji";
import mainImg from '../assets/main.png'
const Main = () => {
  return (
    <div name='main' 
        className='pl-20 h-screen w-full p-2 flex flex-col items-center justify-around gap-6 pt-24 md:flex-row md:items-center'>
           {/* LEFT */}
                <div className='text-white mt-8 flex flex-col gap-6 mb-6 md:w-1/2'>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-3xl md:text-4xl'>
                        I'm Nilay Singh
                        </h1>
                        <span className='text-3xl animate-bounce z-20'>{emoji("👋")}</span>
                    </div>
                    <div className='leading-7 text-xl flex flex-col items-center justify-start gap-8 mt-2 md:flex-row md:text-2xl'>
                        <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with JavaScript / Reactjs / Nodejs / MongoDB and some other cool libraries and frameworks.</p>
                     </div>
                     <div className='gap-3 hidden md:flex'>
                        <button className='cursor-pointer font-semibold bg-black p-3 px-4 rounded-md hover:bg-white hover:text-black transition ease-linear duration-300'>Portfolio</button>
                        <button className='cursor-pointer font-semibold bg-black p-3 px-4 rounded-md hover:bg-white hover:text-black transition ease-linear duration-300'>Resume</button>
                     </div>
                </div>
            {/* LEFT */}

            {/* RIGHT */}
                <div className='flex items-center justify-center md:w-1/2'>
                    <img 
                    src={mainImg} 
                    alt=""
                    className='h-[20rem] w-[20rem] md:h-[28rem] md:w-[28rem]'
                     />
                </div>
            {/* RIGHT */}
    </div>
  )
}

export default Main