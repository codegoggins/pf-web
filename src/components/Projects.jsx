import React from 'react'
import net from '../assets/netflix.png'
import tesla from '../assets/tesla.png'
import weather from '../assets/weather.png'
import chat from '../assets/chat.png'


import GitHubIcon from '@mui/icons-material/GitHub';
import NearMeIcon from '@mui/icons-material/NearMe';

const Projects = () => {

  const ProjectsArray = [
    {
      id:1,
      title:"netflix clone",
      desc:"A fully responsive Netflix Clone App created using React JS , tailwind CSS , firebase and React Router Dom and Context API . Context API is used for statemanagement for Firebase Authentication",
      imgLink:net,
      codeLink:"https://github.com/codegoggins/netflix-clone",
      projectLink:"https://netflix-clone-13127.firebaseapp.com/"
    },
    {
      id:3,
      title:"weather app",
      desc:"Weather app created using HTML CSS and Javascript & Openweathermap API. OpenWeather API provides us with weather forecasts, nowcasts and history in a fast and elegant way",
      imgLink:weather,
      codeLink:"https://github.com/codegoggins/Weather-App",
      projectLink:"https://stellar-sfogliatella-c26c41.netlify.app/"
    },
    {
      id:2,
      title:"tesla clone",
      desc:"A fully responsive Tesla Clone App created using React JS , redux , firebase. Clone App designed using styled components in React JS. Authentication done using Firebase and Redux state management tool / Redux Toolkit",
      imgLink:tesla,
      codeLink:"https://github.com/codegoggins/tesla-clone",
      projectLink:"https://tesla-clone-eb138.web.app/"
    },
    {
      id:4,
      title:"chat app UI",
      desc:"A chat app UI created using React JS & Styled Components",
      imgLink:chat,
      codeLink:"https://github.com/codegoggins/chatize",
      projectLink:"https://resonant-heliotrope-fe32ac.netlify.app/"
    }
  ]

  return (
    <div className='py-4'>
        <p
        className='text-white text-4xl border-b-4 border-[#2ea759] inline'>
        My Work
        </p>
        {/* PROJECT CARDS */}
        <div
        className='mt-8 flex flex-wrap flex-col gap-16 justify-center md:justify-start items-center md:flex-row'
        >
          
            {/* SINGLE CARD */}
        {
          ProjectsArray.map(({id,title,desc,imgLink,codeLink,projectLink})=>(
            <div key={id} className='w-[300px] h-[450px] border-[2.5px] border-[#141414] rounded-xl overflow-hidden md:w-[400px]'>
                <img className='w-full object-cover' src={imgLink} alt="" />
                {/* CARD CONTENT */}
                <div className='text-white flex flex-col p-2 pt-4 px-4'>
                     <div className='flex items-center justify-between'>
                     <p className='text-2xl font-bold'>{title}</p>
                     <div className='flex gap-4'>
                     <a href={codeLink} target='_blank' rel='noreferrer'>
                        <GitHubIcon fontSize='large'/>
                     </a>
                     <a href={projectLink} target='_blank' rel='noreferrer'>
                        <NearMeIcon fontSize='large'/>
                     </a>
                     </div>
                     </div>
                     <hr className='w-full my-3 border-[#141414]'/>
                     <p className='text-[#8f9094] text-lg font-[400] md:text-left'>{desc}</p>
                </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Projects