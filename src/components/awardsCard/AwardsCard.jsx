import React from 'react'

const AwardsCard = ({title, subtitle, imageUrl}) => {
  return (
    <div className='flex justify-center items-center lg:flex-row sm:flex-row'>
        <img src={imageUrl} alt={title} className='w-[55px] h-[55px]' />
        <div className='text-white md:pl-4 pl-4 sm:pt-4'>
            <p className= 'text-xl' style={{color: '#dccab7'}}>{title}</p>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default AwardsCard