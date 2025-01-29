import React from 'react'
import images from '../../utils/images'
import SubHeading from '../../components/SubHeading/SubHeading'

const Findus = () => {
  return (
    <div id='contact' className='bg-primaryblack w-full h-[100vh] justify-between items-center lg:flex-row flex md:flex-row sm:flex-col'>
        <div className='lg:pl-72 sm:pl-0 container md:pl-10'>
          <SubHeading title='Contatos' />
          <h1 className='text-golden tracking-[0.04em] capitalize text-5xl md;3xl sm:text-2xl leading-[117px] font-serif' style={{marginBottom: '3rem'}}>Encontre-nos</h1>
          <div>
            <p className='text-grey'>Rua Das Calçadas, n° 2025 </p>
            <p className='' style={{color: '#dcca87', margin: '2rem 0'}}>Horário de funcionamento</p>
            <p className='text-white font-mono'>Seg - Sex: 8:30h ás 17h</p>
            <p className='text-white font-mono'>Sab - Dom: 10h ás 00:30h</p>
          </div>
        </div>
        <div className='justify-center items-center flex
        pt-6 pr-7'>
          <img src={images.findus} className='lg:w-[60%] md:w-[50%] sm:w-[200px]' />
        </div>
    </div>
  )
}

export default Findus