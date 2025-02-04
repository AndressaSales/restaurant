import React from 'react'
import SubHeading from '../SubHeading/SubHeading'

const Newsletter = () => {
  return (
    <div className='border-[1px] border-golden bg-black' style={{padding: '2rem 4rem'}}>
      <div className='text-center items-center flex flex-col'>
        <SubHeading title='Boletim Informativo' />
        <h1 className='text-golden capitalize font-serif tracking-[0.04em] lg:text-5xl md:text-3xl text-2xl pb-6'>Assine Nosso Boltetim Informativo</h1>
        <p className='font-mono font-normal capitalize text-white '>E nunca perca as Últimas atualizações</p>
      </div>
      <div className='py-5 pt-[3rem] justify-center flex items-center'>
        <input 
          type="email" 
          placeholder='seuemail@email.com'          
          className='bg-transparent border-2 border-golden lg:w-[620px] w-[300px] rounded-[5px] text-[1rem] text-white mr-[2rem]'
          style={{padding: '0.75rem 1rem'}} 
        />
        <button className='bg-crismson text-primaryblack text-[16px] tracking-[0.04em] font-bold leading-[28px] outline-none w-max' style={{padding: '0.5rem 1.5rem'}}>Inscrever-se</button>
      </div>
    </div>
  )
}

export default Newsletter