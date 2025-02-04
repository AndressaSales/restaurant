import React from 'react'
import FooterOverlay from './FooterOverlay'
import Newsletter from './Newsletter'
import images from '../../utils/images'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='w-full relative z-[1] flex justify-start items-center flex-col pt-[0] py-5 sm:pt-5'>
      <FooterOverlay />
      <Newsletter />

      <div className='justify-center items-center gap-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3' style={{padding: '0 2rem' ,  marginTop: '5rem'}}>
        <div className='text-center items-center flex justify-center flex-col'>
          <h1 className='text-golden capitalize font-serif leading-[0.04em] text-2xl mb-'>Contate-nos</h1>
          <p className='text-grey pt-6 pb-2'>Ruas das Calçadas, n° 2025, Brasil</p>
          <p className='text-grey pb-1'>(81) 90000-0000</p>
          <p className='text-grey'>(81) 91111-1111</p>
        </div>
        <div className='text-center items-center justify-center flex flex-col'>
          <img src={images.gericht} alt="logo" className='w-[210px] mb-[0.75rem]' />
          <p className='text-grey font-family'>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          <img src={images.spoon} alt="spoon" style={{marginTop: '15px'}} />
          <div className='flex text-golden text-[20px] gap-3 pt-2'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram/>
          </div>
        </div>
        <div className='text-center text-grey'>
          <h1 className='font-serif capitalize leading-[0.04em] text-2xl md:text-xl sm:text-xl mb-[0.75rem]' >Horário de funcionamento</h1>
          <p className=''>seg - sex:</p>
          <p>8:30h ás 17h</p>
          <p className='pt-2'>sab - Dom:</p>
          <p>10h ás 00:30h</p>
        </div>
      </div>
      <div className='text-center text-sm pt-10'>
        <p className='text-grey'>&copy;2025 <span className='text-golden'>Gerícht</span>. Todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer