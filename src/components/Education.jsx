import React from 'react'

const Education = () => {
  return (
    <div className='px-20 mt-20 py-12'>
        <p className='text-white text-[2.8rem] mb-6'>Education</p>
        {/* TIMELINE */}
        <div className='relative flex flex-col gap-8'>
        {/* VERTICAL LINE */}
        <div className='absolute w-1 h-full bg-black left-[0.2rem] shadow-md'>
        </div>
        {/* CARD 1 */}
        <div className='ml-8 sm:w-[50%]'>
            {/* CONTENT */}
            <div className='bg-white text-black p-6 rounded-md shadow-md'>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sequi voluptas assumenda aperiam eveniet fugit quo ipsam cupiditate consequatur nulla porro accusamus, est fugiat iste error atque commodi magnam molestias!
            </div>
        </div>
        {/* CARD 1 */}
        <div className='ml-8 sm:w-[50%]'>
            {/* CONTENT */}
            <div className='bg-white text-black p-6 rounded-md shadow-md'>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sequi voluptas assumenda aperiam eveniet fugit quo ipsam cupiditate consequatur nulla porro accusamus, est fugiat iste error atque commodi magnam molestias!
            </div>
        </div>
        </div>
    </div>
  )
}

export default Education