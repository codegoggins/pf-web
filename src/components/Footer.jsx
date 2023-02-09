import React from 'react'

const Footer = () => {
  return (
    <div className='p-2 flex items-center justify-center text-lg text-center text-white pb-8'>
        <p className='w-[50%]'>Designed and Developed by <a href='https://github.com/codegoggins' target='_blank' rel='noreferer' className='text-[#2ea759]'>@codegoggins</a>.
        Built with <span className='text-[#2ea759]'>ReactJS</span> & <span className='text-[#2ea759]'>TailwindCSS</span>. Hosted on <span className='text-[#2ea759]'>Netlify</span>.</p>
    </div>
  )
}

export default Footer