import React from 'react'
import images from '../../utils/images'
import SubHeading from '../../components/SubHeading/SubHeading'

const Chefs = () => {
  return (
    <div className='bg-primaryblack h-[100vh] w-[100%] justify-center items-center lg:flex-row flex flex-col'>
        <div className='flex-1 w-[100%] flex justify-center items-center ml-[2rem] '>
            <img src={images.chef} alt="chef" className='w-[50%]' />
        </div>
        <div className='flex-1 w-[100%] flex justify-center items-start flex-col container'>
            <SubHeading title='Palavras do Chef' />
            <h1 className='text-golden tracking-[0.04em] uppercase leading-[117px] text-5xl md:text-3xl sm:text-base font-serif'>No Que Acreditamos</h1>
            <div className='text-white'>
                <div className='flex justify-start items-end mt-7'>
                    <img src={images.quote} style={{margin: '0 1rem 1rem 0', width: '47px', height: '40px'}} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <p>Autem asperiores sed accusantium, quo possimus amet corrupti neque, odio animi ipsa assumenda illum ad corporis debitis laborum unde, velit sit deleniti?</p>
            </div>
            <div className='w-[100%] mt-[3rem]'>
                <p className='text-golden'>Kevin Luo</p>
                <p className='text-grey font-normal capitalize  mb-7'>Chef & Fundador</p>
                <img src={images.sign} className='w-[300px]' />
            </div>
        </div>
    </div>
  )
}

export default Chefs