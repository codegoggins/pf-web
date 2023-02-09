import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white gap-6 p-4 py-24'>
          <h1 className='text-5xl font-bold antialiased'>Keep In Touch .</h1>
          <p className='text-xl text-center w-[50%]'>I'm currently specializing in MERN Stack Development. Feel free to get in touch and talk more about your projects.</p>
          <div className='flex gap-4'>
            <a
            className='bg-black px-4 p-2 flex items-center justify-around gap-2 rounded-md' 
            href="">
            <LinkedInIcon/>
            <p>LinkedIn</p>
            </a>
            <a
            className='bg-black px-4 p-2 flex items-center justify-around gap-2 rounded-md' 
            href="">
            <ArticleIcon/>
            <p>Resume</p>
            </a>
            <a
            className='bg-black px-4 p-2 flex items-center justify-around gap-2 rounded-md' 
            href="">
            <EmailIcon/>
            <p>snilay011@gmail.com</p>
            </a>
          </div>
    </div>
  )
}

export default Contact