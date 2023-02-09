import React from 'react'
import mainImg from '../assets/main.png'
import emoji from "react-easy-emoji";


const About = () => {
  return (
    <div className='px-20 w-full p-2 flex flex-col items-center justify-around gap-6 pt-16 md:flex-row md:items-center'>
           {/* LEFT */}
                <div className='text-white mt-8 flex flex-col gap-6 mb-6 md:w-1/2'>
                    <div className='flex gap-2 items-center'>
                        <span className='text-3xl'>{emoji("⚡")}</span>
                        <h1 className='text-3xl md:text-4xl'>
                        About Me
                        </h1>
                    </div>
                    <div className='leading-7 text-lg flex flex-col items-center justify-start gap-8 mt-2'>
                        <p>Hey ! I'm Nilay Singh, I was introduced to coding & development in my first year of college , and have been passionate about it ever since.</p>
                        <p>I explored how to code myself, fast-forward to today, I do programming in various languages and technologies
                        I'm interested in building something awesome with code and automate tasks with code, currently focused on Web Development,
                        Open Source and Competitive Programming
                        </p>
                        <p>
                        When I'm not coding I am out playing various sports or watching a show on Netflix
                        </p>
                     </div>
                </div>
            {/* LEFT */}

            {/* RIGHT */}
                <div className='flex items-center justify-center md:w-1/2'>
                    <img 
                    src={mainImg} 
                    alt=""
                    className='h-[15rem] w-[15rem] md:h-[25rem] md:w-[25rem]'
                     />
                </div>
            {/* RIGHT */}
    </div>
  )
}

export default About