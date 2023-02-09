import React from 'react'
import htmlLogo from '../assets/html.png' 
import cssLogo from '../assets/css.png' 
import jsLogo from '../assets/javascript.png'
import reactLogo from '../assets/react.png'
import nodeLogo from '../assets/nodejs.png'
import expressLogo from '../assets/express.png'
import mongoLogo from '../assets/mongo.png'
import sqlLogo from '../assets/sql.png'
import firebaseLogo from '../assets/firebase.png'
import tailwindLogo from '../assets/tailwind.png'
import sassLogo from '../assets/sass.png'
import gitLogo from '../assets/git.png'
import githubLogo from '../assets/github.png'
import npmLogo from '../assets/npm.png'



const Skills = () => {

  const SkillArray = [
      {
        id:1,
        imgSrc:htmlLogo,
        style:'shadow-orange-500'
      },
      {
        id:2,
        imgSrc:cssLogo,
        style:'shadow-blue-500'

      },
      {
        id:3,
        imgSrc:jsLogo,
        style:'shadow-yellow-500'
      },
      {
        id:4,
        imgSrc:reactLogo,
        style:'shadow-cyan-500'
      },
      {
        id:5,
        imgSrc:nodeLogo,
        style:'shadow-green-500'
      },
      {
        id:6,
        imgSrc:expressLogo,
        style:'shadow-zinc-400'
      },
      {
        id:9,
        imgSrc:firebaseLogo,
        style:'shadow-yellow-400'
      },
      {
        id:7,
        imgSrc:mongoLogo,
        style:'shadow-lime-400'
      },
      {
        id:10,
        imgSrc:tailwindLogo,
        style:'shadow-sky-500'
      },
      {
        id:8,
        imgSrc:sqlLogo,
        style:'shadow-amber-500'
      },
      {
        id:11,
        imgSrc:sassLogo,
        style:'shadow-pink-500'
      },
      {
        id:12,
        imgSrc:gitLogo,
        style:'shadow-red-600'
      },
      {
        id:13,
        imgSrc:githubLogo,
        style:'shadow-gray-500'
      },
      {
        id:14,
        imgSrc:npmLogo,
        style:'shadow-red-500'

      }
  ];  

  return (
    <div className='py-6 mt-6'>
        <p className='text-white text-4xl border-b-4 border-[#2ea759] inline leading-normal'>Tech Stack</p>
        {/* CARDS */}
        <div className='w-full grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-10'>
           
           {/*SINGLE CARD */}
           {

            SkillArray.map(({id,imgSrc,style})=>(
                <div key={id} className={`p-2 w-[100px] h-[100px] shadow-md hover:scale-105 duration-500 sm:p-4 sm:w-[150px] sm:h-[150px] rounded-sm ${style}`}>
                <img src={imgSrc} alt="" className='w-full h-full object-contain'/>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Skills