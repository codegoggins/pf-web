import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const Links = () => {

  return (
    <div className='text-black flex flex-col left-0 fixed top-[35%] md:hidden'>
        <ul>
            
            {/* GITHUB */}
                  
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-black  
             ml-[-100px] 
             hover:ml-[-10px]
             duration-300
             hover:rounded-md'> 
            <a href='https://github.com/codegoggins' target='_blank' className='flex justify-between items-center w-full text-white'>
                    <p>Github</p>
                    <GitHubIcon size={30}/>
            </a>
            </li>

            {/* LINKED IN */}


            <li className='flex justify-between items-center w-40 h-14 px-4 bg-black  
             ml-[-100px] 
             hover:ml-[-10px]
             duration-300
             hover:rounded-md'> 
            <a href='https://www.linkedin.com/in/nilay-singh-7234a31a6/' target='_blank' className='flex justify-between items-center w-full text-white'>
                    <p>LinkedIn</p>
                    <LinkedInIcon size={30}/>
            </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 bg-black  
             ml-[-100px] 
             hover:ml-[-10px]
             duration-300
             hover:rounded-md'> 
            <a href='https://www.linkedin.com/in/nilay-singh-7234a31a6/' target='_blank' className='flex justify-between items-center w-full text-white'>
                    <p>Resume</p>
                    <ArticleOutlinedIcon size={30}/>
            </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 bg-black  
             ml-[-100px] 
             hover:ml-[-10px]
             duration-300
             hover:rounded-md'> 
            <a href='https://www.linkedin.com/in/nilay-singh-7234a31a6/' target='_blank' className='flex justify-between items-center w-full text-white'>
                    <p>Mail</p>
                    <MarkunreadOutlinedIcon size={30}/>
            </a>
            </li>

        </ul>
    </div>
  )
}

export default Links