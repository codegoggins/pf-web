import React from 'react'
import emoji from "react-easy-emoji";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';


const Main = () => {
  return (
    <div name='main' 
        className='px-12 h-screen w-full p-2 flex flex-col items-center justify-start gap-6 pt-24 md:flex-row md:items-center'>

                <div className='text-white mt-8 flex flex-col gap-12 mb-6'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-2xl md:text-5xl flex flex-col items-center gap-2'>
                           Hey there
                        </p>
                        <span className='text-2xl sm:text-5xl animate-bounce z-20'>{emoji("👋")}</span>
                        <p className='text-2xl md:text-5xl'>I'm - </p>
                    </div>
                    <div className='leading-7 text-xl flex flex-col md:justify-start gap-8 mt-2 md:text-3xl'>
                        <p className='font-bold text-8xl leading-12'>Nilay Singh.</p>
                        <p  className='text-[#8f9094]'>💻 A self-taught developer with an interest in Computer Science.</p>
                        <p  className='text-[#8f9094]'>🚀 Exploring Opportunities & Side Projects</p>
                     </div>

                     {/* BUTTONS */}
                     <div className='flex flex-col gap-8 md:flex-row'>
                        <a
                        className='bg-[#141414] px-4 p-4 flex items-center gap-2 rounded-md' 
                        href="https://www.linkedin.com/in/nilay-singh-7234a31a6/"
                        target='_blank'
                        rel='noreferrer'
                        >
                        <LinkedInIcon className='text-[#2ea759]'/>
                        <p>LinkedIn</p>
                        </a>
                        <a
                        className='bg-[#141414] px-4 p-4 flex items-center gap-2 rounded-md' 
                        target='_blank'
                        rel='noreferrer'
                        href="https://1drv.ms/b/s!Ajk7J0z-JzPcgbEHoq9-mNVFOOukrA?e=24ZDP9"
                        download='resume'
                        >
                        <ArticleIcon className='text-[#2ea759]'/>
                        <p>Resume</p>
                        </a>
                        <a
                        className='bg-[#141414] px-4 p-4 flex items-center gap-2 rounded-md' 
                        target='_blank'
                        rel='noreferrer'
                        href="https://github.com/codegoggins"
                        >
                        <GitHubIcon className='text-[#2ea759]'/>
                        <p>Github</p>
                        </a>
                    </div>

                </div>
    </div>
  )
}

export default Main
