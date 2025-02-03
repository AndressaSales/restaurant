import React from 'react'
import images from '../../utils/images'
import SubHeading from '../../components/SubHeading/SubHeading'

const Chefs = () => {
  return (
    <div className='bg-primaryblack justify-center items-center lg:flex-row md:flex-row flex flex-col w-full h-[100vh]' style={{padding: '4rem 0 4rem 6rem'}}>
        <div className='flex-1 w-[100%] flex justify-center items-center ml-[2rem] '>
            <img src={images.chef} alt="chef" className='lg:w-[50%] md:w-[50%] w-[300px]' />
        </div>
        <div className='flex-[1] w-[100%] flex justify-center items-start flex-col container'>
            <SubHeading title='Palavras do Chef' />
            <h1 className='text-golden tracking-[0.04em] uppercase leading-[117px] lg:text-5xl md:text-3xl sm:text-base font-serif'>No Que Acreditamos</h1>
            <div className='text-white'>
                <div className='flex justify-start items-end mt-7'>
                    <img src={images.quote} style={{margin: '0 1rem 1rem 0'}} className='lg:w-[47px]sm:w-[30px] h-[40px] sm:h-[20px]' />
                    <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <p className='text-base'>Autem asperiores sed accusantium, quo possimus amet corrupti neque, odio animi ipsa assumenda illum ad corporis debitis laborum unde, velit sit deleniti?</p>
            </div>
            <div className='w-[100%] mt-[3rem] '>
                <p className='text-golden'>Kevin Luo</p>
                <p className='text-grey font-normal capitalize  mb-7'>Chef & Fundador</p>
                <img src={images.sign} className='lg:w-[300px] md:w-[300px] w-[200px]' />
            </div>
        </div>
    </div>
  )
}

export default Chefs