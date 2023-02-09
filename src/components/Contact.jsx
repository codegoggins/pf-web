import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white gap-6 p-2 py-24' id='Contact'>
          <h1 className='text-4xl sm:text-5xl font-bold antialiased'>Keep In Touch .</h1>
          <p className='text-xl text-center w-[50%]'>I'm currently specializing in MERN Stack Development. Feel free to get in touch and talk more about your projects.</p>
          <div className='flex flex-col gap-4 md:flex-row'>
            <a
            className='bg-[#141414] px-4 p-2 flex items-center gap-2 rounded-md' 
            href="https://www.linkedin.com/in/nilay-singh-7234a31a6/"
            target='_blank'
            rel='noreferer'
            >
            <LinkedInIcon className='text-[#2ea759]'/>
            <p>LinkedIn</p>
            </a>
            <a
            className='bg-[#141414] px-4 p-2 flex items-center gap-2 rounded-md' 
            target='_blank'
            rel='noreferer'
            href="/resume.pdf"
            download='resume'
            >
            <ArticleIcon className='text-[#2ea759]'/>
            <p>Resume</p>
            </a>
            <a
            className='bg-[#141414] px-4 p-2 flex items-center gap-2 rounded-md' 
            href="#"
            >
            <EmailIcon className='text-[#2ea759]'/>
            <p>snilay011@gmail.com</p>
            </a>
          </div>
    </div>
  )
}

export default Contact