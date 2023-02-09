import React from 'react'
import SpokeIcon from '@mui/icons-material/Spoke';

const WorkExperience = () => {

  const Work = [
    {
      id:1,
      from:"June 2022",
      till:"August 2022",
      compName:"Intern @ Dreadnought School", 
      compDesc:"An Initiative By YCombinator",
      jobDesc:"Created websites for startups using React & tailwind CSS",
      role:"Frontend Developer",
      loc:"Remote"
    }
  ];

  return (
    <div className='px-20 mt-20 py-12'>
        <p className='text-white text-[2.8rem] mb-6 flex items-center justify-end gap-3'>
        <SpokeIcon fontSize='large'/>
        Work Experience</p>
        {/* TIMELINE */}
        <div className='relative flex flex-col items-end gap-8'>
        {/* VERTICAL LINE */}
        <div className='absolute w-1 h-full bg-white right-[-2rem] shadow-md'>
        </div>
        {/* CARD*/}
        {
                 Work.map(({id,from,till,compName,compDesc,role,loc,jobDesc})=>(
                  <div key={id} className='ml-8 md:w-[50%]'>
                    {/* CONTENT */}
                    <div className='bg-white text-black p-6 rounded-md shadow-md flex flex-col gap-1'>
                        <p className='text-xl font-bold'>{`${from} - ${till}`}</p>
                        <p className='text-lg font-bold'>{compName}</p>
                        <p className='text-lg'>{compDesc}</p>
                        <p className='text-lg'>{jobDesc}</p>
                        <p className='flex font-bold items-center justify-between text-lg'>
                        <span>{role}</span>
                        <span>{loc}</span>
                        </p>
                    </div>
                  </div>
                 ))
            }
        </div>
    </div>
  )
}

export default WorkExperience