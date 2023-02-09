import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {

  const [toggle,setToggle] = useState(false);

  const navLinks = [
      {
        id:1,
        link:'Home'
      },
      {
        id:2,
        link:'Portfolio'
      },
      {
        id:3,
        link:'Work Experience'
      },
      {
        id:4,
        link:'Education'
      },
      {
        id:5,
        link:'Resume'
      },
      {
        id:6,
        link:'Contact'
      }

  ]; 

  return (
    <div className='flex items-center w-full h-20 bg-black text-white justify-between py-4 px-10 top-0 fixed z-40'>
        <h1 className='text-3xl sm:text-4xl ml-3 font-bold'>
        <a href="https://github.com/codegoggins" target='_blank' rel='noreferer'>
        {`{codegoggins}`}
        </a>
        </h1>
        <ul className='hidden lg:flex gap-6'>
             {
                navLinks.map((navLink)=>(
                    <li key={navLink.id} className='cursor-pointer font-medium text-white text-xl capitalize hover:scale-105 duration-200'>{navLink.link}</li>
                ))
             }
        </ul>
        <div className='cursor-pointer text-white z-40 lg:hidden' onClick={()=>setToggle(!toggle)}>
        {
            toggle ? (<CloseOutlinedIcon fontSize='large'/>) : (<MenuOutlinedIcon fontSize='large'/>)
        }
        </div>
        {/* MOBILE MENU */}
        { toggle && (
        <ul className='flex flex-col items-center justify-center gap-6 absolute top-0 left-0 bottom-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 z-30'>
             {
                navLinks.map((navLink)=>(
                    <li key={navLink.id} className='cursor-pointer font-medium text-white text-2xl capitalize hover:scale-105 duration-200'>{navLink.link}</li>
                ))
             }
        </ul>
        )
        }
    </div>
  )
}

export default Navbar