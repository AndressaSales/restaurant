import React from 'react'
import meal from '../../assets/meal.mp4'

const Intro = () => {
  return (
    <div className='relative flex justify-center items-center w-[100%] h-[450px]'>
        <video autoPlay loop playsInline muted className='absolute w-[100%] h-[450px]  object-cover right-0 bottom-0 z-[-1]'>
            <source src={meal} type='video/mp4' />
        </video>
        <div>
        <div className='bg-primaryblack w-[100%] h-[450px] absolute items-center justify-center flex inset-0 bg-opacity-50 text-center'>
          <div className='text-center'>
            <h1 className='lg:text-3xl text-xl text-golden tracking-[0.04em] font-serif font-bold'>Desvende os Segredos da Culinária</h1>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Intro