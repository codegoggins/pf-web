import React from 'react'
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {

  const Education = [
    {
      id:1,
      from:2017,
      till:2018,
      instName:"St. Francis School",
      instLoc:"Indirapuram , Ghaziabad",
      instClass:"Class X",
      grade:"94.6 %"
    },
    {
      id:2,
      from:2018,
      till:2020,
      instName:"St. Francis School",
      instLoc:"Indirapuram , Ghaziabad",
      instClass:"Class XII",
      grade:"92 %"
    },
    {
      id:3,
      from:2020,
      till:2024,
      desc:"BTECH in Computer Science",
      instName:"DIT University",
      instLoc:"Dehradun , Uttarakhand",
      instClass:"Third year",
      grade:"8.35 CGPA"
    }
  ];

  return (
    <div className='px-20 mt-20 py-12'>
        <p className='text-white text-[2.8rem] mb-6 flex gap-3 items-center'>
        <SchoolIcon fontSize='large'/>
        Education
        </p>
        {/* TIMELINE */}
        <div className='relative flex flex-col gap-8'>
        {/* VERTICAL LINE */}
        <div className='absolute w-1 h-full bg-white left-[0.2rem] shadow-md'>
        </div>
        {/* CARD*/}
            {
                 Education.map(({id,from,till,desc,instName,instLoc,instClass,grade})=>(
                  <div key={id} className='ml-8 md:w-[50%]'>
                    {/* CONTENT */}
                    <div className='bg-white text-black p-6 rounded-md shadow-md flex flex-col gap-1'>
                        <p className='text-xl font-bold'>{`${from} - ${till}`}</p>
                        <p className='text-lg font-bold'>{desc}</p>
                        <p className='text-lg'>{instName}</p>
                        <p className='text-lg'>{instLoc}</p>
                        <p className='flex font-bold items-center justify-between text-lg'>
                        <span>{instClass}</span>
                        <span>{grade}</span>
                        </p>
                    </div>
                  </div>
                 ))
            }
        </div>
    </div>
  )
}

export default Education