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
        link:'About'
      },
      {
        id:3,
        link:'Portfolio'
      },
      {
        id:4,
        link:'Education'
      },
      {
        id:5,
        link:'Work Experience'
      },

  ] ; 

  return (
    <div className='flex items-center w-full h-20 bg-black text-white justify-between py-4 px-10'>
        <h1 className='text-4xl ml-3 font-bold'>Portfolio</h1>
        <ul className='hidden md:flex gap-10'>
             {
                navLinks.map((navLink)=>(
                    <li key={navLink.id} className='cursor-pointer font-medium text-gray-500 text-xl capitalize hover:scale-105 duration-200'>{navLink.link}</li>
                ))
             }
        </ul>
        <div className='cursor-pointer text-gray-500 z-10 md:hidden' onClick={()=>setToggle(!toggle)}>
        {
            toggle ? (<CloseOutlinedIcon fontSize='large'/>) : (<MenuOutlinedIcon fontSize='large'/>)
        }
        </div>
        {/* MOBILE MENU */}
        { toggle && (
        <ul className='flex flex-col items-center justify-center gap-5 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
             {
                navLinks.map((navLink)=>(
                    <li key={navLink.id} className='cursor-pointer font-medium text-gray-500 text-xl capitalize hover:scale-105 duration-200'>{navLink.link}</li>
                ))
             }
        </ul>
        )
        }
    </div>
  )
}

export default Navbar