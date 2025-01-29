import React from 'react'
import meal from '../../assets/meal.mp4'

const Intro = () => {
  return (
    <div className='bg-primaryblack py-24'>
      <div className='relative max-w-7xl mx-auto h-[550px] md:h-[600px]'>
        <video autoPlay loop playsInline muted className='absolute w-[100%] h-[550px] md:[600px] object-cover right-0 bottom-0 z-[1] md:rounded-2xl'>
            <source src={meal} type='video/mp4' />
        </video>
        <div>
          <div className='bg-primaryblack md:rounded-2xl absolute items-center justify-center flex inset-0 bg-opacity-50 text-center z-10'>
            <div className='text-center'>
              <h1 className='lg:text-4xl text-2xl text-golden tracking-[0.04em] font-serif font-bold'>Desvende os Segredos da Culinária</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro